/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
import { ENVIRONMENT, FIREBASE_CONFIG } from "../config/constants";
import { DEBUG } from "./logger";
import {
    formatDate,
    formatPrice,
    formatTime,
    recursiveCamelCase
} from "./helper";
import { ERROR_ENUM } from "../config/error";
import { APIFormat } from "./types";

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
const firestore = getFirestore(app);

if (ENVIRONMENT === "PROD") {
    getAnalytics();
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

    const getEvents = async (): Promise<APIFormat> => {
        try {
            const q = query(
                collection(firestore, "events"),
                orderBy("updated", "desc"), // get most updated event
                limit(2)
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
            return [false, null, ERROR_ENUM.FIREBASE_FAILURE];
        }
    };

    return {
        getEvents,
        getEvent
    };
})();

export default firebaseFn;
