/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    collection,
    getDocs,
    getFirestore,
    limit,
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

    const getEvents = async () => {
        try {
            const q = query(collection(firestore, "events"), limit(2));

            const querySnapshot = await getDocs(q);

            let events: any = [];

            querySnapshot.forEach((doc) => {
                const oneEvent = doc.data();
                events.push({
                    ...oneEvent,
                    date: formatDate(oneEvent.date),
                    time: formatTime(oneEvent.time),
                    price: formatPrice(oneEvent.price, oneEvent.multiplePrice),
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
            return [false, null, "Something went wrong!"];
        }
    };

    return {
        getEvents
    };
})();

export default firebaseFn;
