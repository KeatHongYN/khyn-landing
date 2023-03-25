/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {
    collection,
    doc,
    endBefore,
    getCountFromServer,
    getDoc,
    getDocs,
    getFirestore,
    limit,
    limitToLast,
    orderBy,
    query,
    startAfter,
    startAt
} from "firebase/firestore";
import {
    ENVIRONMENT,
    ENVIRONMENT_ENUMS,
    FIREBASE_APP_CHECK_PUBLIC_KEY,
    FIREBASE_CONFIG,
    FIRESTORE_EVENTS_QUERY_LIMIT
} from "../config/constants";
import { DEBUG, logSentryException } from "./logger";
import {
    formatDate,
    formatPrice,
    formatTime,
    recursiveCamelCase
} from "./helper";
import { ERROR_ENUM } from "../config/error";
import { APIFormat } from "./types";
import { PAGINATION_ACTION_ENUM } from "../config/enum";

// Initialize Firebase
DEBUG.log("firebase.ts | start run!");
const app = initializeApp(FIREBASE_CONFIG);
const firestore = getFirestore(app);
const storage = getStorage();
const analytics =
    (ENVIRONMENT === ENVIRONMENT_ENUMS.PROD ||
        ENVIRONMENT === ENVIRONMENT_ENUMS.DEV) &&
    typeof window !== "undefined"
        ? getAnalytics(app)
        : null;

if (typeof window !== "undefined") {
    if (ENVIRONMENT === ENVIRONMENT_ENUMS.LOCAL) {
        (self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }
    const appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(FIREBASE_APP_CHECK_PUBLIC_KEY!),
        isTokenAutoRefreshEnabled: true
    });
}

const firebaseFn = (() => {
    const checkCommonError = (errCode: string) => {
        let result;
        switch (errCode) {
            case "auth/network-request-failed": {
                result = [false, "Network error"];
                break;
            }
            case "auth/too-many-requests": {
                result = [false, "Too many request, try again later"];
                break;
            }
            case "auth/auth/web-storage-unsupported": {
                result = [
                    false,
                    "Error, please enable your browser's web storage"
                ];
                break;
            }
            default: {
                result = null;
            }
        }
        return result;
    };

    const logAnalytics = (eventName: string, eventParams?: any) => {
        if (analytics) {
            try {
                logEvent(analytics, eventName, eventParams);
            } catch (error) {
                DEBUG.error(error);
                logSentryException(
                    "ERROR_ENUM.FIREBASE_FAILURE",
                    "logAnalytics",
                    `error: ${error}`
                );
            }
        }
    };

    const getFileFromStorage = async (filePath: string): Promise<APIFormat> => {
        const fileRef = ref(storage, filePath);
        try {
            const downloadURL = await getDownloadURL(fileRef);
            return [true, { downloadURL }, null];
        } catch (error) {
            DEBUG.error(error);
            return [false, null, ERROR_ENUM.FIREBASE_FAILURE];
        }
    };

    const getNoOfEvents = async (): Promise<APIFormat> => {
        try {
            const c = collection(firestore, "events");
            const snapshot = await getCountFromServer(c);
            const { count } = snapshot.data();
            return [true, count, null];
        } catch (error) {
            DEBUG.error(error);
            logSentryException(
                "ERROR_ENUM.FIREBASE_FAILURE",
                "getNoOfEvents",
                `error: ${error}`
            );
            return [false, null, ERROR_ENUM.FIREBASE_FAILURE];
        }
    };

    const checkNextOrPrevPageExists = async (
        actionType: PAGINATION_ACTION_ENUM,
        lastOrFirstVisible: any
    ) => {
        try {
            const qConstraints = [];
            if (actionType === PAGINATION_ACTION_ENUM.PREV) {
                qConstraints.push(
                    endBefore(lastOrFirstVisible),
                    limitToLast(1)
                );
            }

            if (
                actionType === PAGINATION_ACTION_ENUM.NEXT ||
                actionType === PAGINATION_ACTION_ENUM.NONE
            ) {
                qConstraints.push(startAfter(lastOrFirstVisible), limit(1));
            }

            const q = query(
                collection(firestore, "events"),
                orderBy("updated", "desc"),
                ...qConstraints
            );

            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                return true;
            }
            return false;
        } catch (error) {
            DEBUG.error(error);
            return false;
        }
    };

    const getEvents = async (paginationObj: any): Promise<APIFormat> => {
        try {
            const qConstraints = [];

            // 1.1 First arrival to /events page
            if (paginationObj.actionType === PAGINATION_ACTION_ENUM.NONE) {
                qConstraints.push(limit(FIRESTORE_EVENTS_QUERY_LIMIT));
            }

            // 1.2 User clicks on "prev"
            if (paginationObj.actionType === PAGINATION_ACTION_ENUM.PREV) {
                // Prev does not exist
                if (!paginationObj.prevExist) {
                    return [false, null, null];
                }
                qConstraints.push(
                    endBefore(paginationObj.firstVisible),
                    limitToLast(FIRESTORE_EVENTS_QUERY_LIMIT)
                );
            }

            // 1.3 User clicks on "next"
            if (paginationObj.actionType === PAGINATION_ACTION_ENUM.NEXT) {
                // Next does not exist
                if (!paginationObj.nextExist) {
                    return [false, null, null];
                }
                qConstraints.push(
                    startAfter(paginationObj.lastVisible),
                    limit(FIRESTORE_EVENTS_QUERY_LIMIT)
                );
            }

            // 2.1 Query "events" Collection
            const q = query(
                collection(firestore, "events"),
                orderBy("updated", "desc"),
                ...qConstraints
            );
            const querySnapshot = await getDocs(q);

            // 2.2 Format data
            let events: any = [];
            querySnapshot.forEach((doc) => {
                const oneEvent = doc.data();
                events.push({
                    ...oneEvent,
                    formatted_date: formatDate(oneEvent.date),
                    formatted_time: formatTime(oneEvent.time),
                    formatted_price: formatPrice(
                        oneEvent.price,
                        oneEvent.multi_price
                    ),
                    id: doc.id
                });
                return doc.data();
            });

            // 3.1 Set new paginationObj for future use
            let newPaginationObj: any = {
                firstVisible: querySnapshot.docs[0],
                lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1]
            };

            // 3.2 Check if next/prev page is available
            let lastOrFirstVisibleObj = newPaginationObj.lastVisible;
            if (paginationObj.actionType === PAGINATION_ACTION_ENUM.PREV) {
                lastOrFirstVisibleObj = newPaginationObj.firstVisible;
            }
            const nextOrPrevPageExists = await checkNextOrPrevPageExists(
                paginationObj.actionType,
                lastOrFirstVisibleObj
            );

            // 3.3 Set additional details in newPaginationObj
            if (paginationObj.actionType === PAGINATION_ACTION_ENUM.PREV) {
                newPaginationObj = {
                    ...newPaginationObj,
                    page: paginationObj.page - 1,
                    actionType: PAGINATION_ACTION_ENUM.NONE,
                    prevExist: nextOrPrevPageExists,
                    nextExist: true
                };
            }
            if (paginationObj.actionType === PAGINATION_ACTION_ENUM.NEXT) {
                newPaginationObj = {
                    ...newPaginationObj,
                    page: paginationObj.page + 1,
                    actionType: PAGINATION_ACTION_ENUM.NONE,
                    prevExist: true,
                    nextExist: nextOrPrevPageExists
                };
            }
            // First time loading the data
            if (paginationObj.actionType === PAGINATION_ACTION_ENUM.NONE) {
                newPaginationObj = {
                    ...newPaginationObj,
                    page: paginationObj.page,
                    actionType: PAGINATION_ACTION_ENUM.NONE,
                    prevExist: false,
                    nextExist: nextOrPrevPageExists
                };
            }

            if (events.length === 0) {
                events = null;
            } else {
                events = recursiveCamelCase(events);
            }

            return [true, { newPaginationObj, events }, null];
        } catch (error) {
            DEBUG.error(error);
            logSentryException(
                "ERROR_ENUM.FIREBASE_FAILURE",
                "getEvents",
                `error: ${error}`
            );
            return [false, null, ERROR_ENUM.FIREBASE_FAILURE];
        }
    };

    const getEvent = async (eventId: string): Promise<APIFormat> => {
        try {
            const docRef = doc(firestore, "events", eventId);
            const docSnaphot = await getDoc(docRef);

            let event: any = null;
            let errorType: ERROR_ENUM | null = null;

            if (docSnaphot.exists()) {
                const data = docSnaphot.data();
                event = recursiveCamelCase({
                    ...data,
                    formatted_date: formatDate(data.date),
                    formatted_time: formatTime(data.time),
                    formatted_price: formatPrice(data.price, data.multi_price),
                    id: docSnaphot.id
                });
            } else {
                errorType = ERROR_ENUM.FIREBASE_INVALID_EVENT_ID;
            }

            return [true, event, errorType];
        } catch (error) {
            DEBUG.error(error);
            logSentryException(
                "ERROR_ENUM.FIREBASE_FAILURE",
                "getEvent",
                `error: ${error}`
            );
            return [false, null, ERROR_ENUM.FIREBASE_FAILURE];
        }
    };

    return {
        logAnalytics,
        getFileFromStorage,
        getNoOfEvents,
        getEvents,
        getEvent
    };
})();

export default firebaseFn;

DEBUG.log("firebase.ts|finshed run|success!");
