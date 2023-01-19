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
    getDoc,
    getDocs,
    getFirestore,
    limit,
    orderBy,
    query
} from "firebase/firestore";
import {
    ENVIRONMENT,
    ENVIRONMENT_ENUMS,
    FIREBASE_APP_CHECK_PUBLIC_KEY,
    FIREBASE_CONFIG
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

// Initialize Firebase
DEBUG.log("firebase.ts running!");
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

    const getEvents = async (): Promise<APIFormat> => {
        try {
            const q = query(
                collection(firestore, "events"),
                orderBy("updated", "desc"), // get most updated event
                limit(5)
            );

            const querySnapshot = await getDocs(q);

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

            if (events.length === 0) {
                events = null;
            } else {
                events = recursiveCamelCase(events);
            }

            return [true, events, null];
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
        getEvents,
        getEvent
    };
})();

export default firebaseFn;

DEBUG.log("firebase.ts ran success!");
