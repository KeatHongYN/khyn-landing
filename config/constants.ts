/* eslint-disable no-unused-vars */
/**
 * Contains general constants/config
 */

export enum ENVIRONMENT_ENUMS {
    PROD = "PROD",
    DEV = "DEV",
    LOCAL = "LOCAL"
}

// General
export const ENVIRONMENT: ENVIRONMENT_ENUMS =
    (process.env.NEXT_PUBLIC_ENVIRONMENT as ENVIRONMENT_ENUMS) ||
    ENVIRONMENT_ENUMS.PROD;
export const DISABLE_DEV_FLAG =
    process.env.NEXT_PUBLIC_DISABLE_DEV_FLAG || false;
export const VERSION = `LANDING-1.0.0${
    ENVIRONMENT === "PROD" ? "" : `-${ENVIRONMENT}`
}`;
export const PORT = process.env.NEXT_PUBLIC_PORT || 3000;
export const DEBUG = process.env.NEXT_PUBLIC_DEBUG || false;
export const SENTRY_DSN =
    process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

// Firebase
export const FIREBASE_CONFIG = {
    apiKey:
        process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
        "AIzaSyBt_CxMo0Z3iduyQhnzhj6rgumNNXvmYTw",
    authDomain:
        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
        "khyn-cms.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "khyn-cms",
    storageBucket:
        process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
        "khyn-cms.appspot.com",
    messagingSenderId:
        process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "773423461522",
    appId:
        process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
        "1:773423461522:web:9b216473d6b73d5dade24b",
    measurementId:
        process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-BHB463FK2G"
};
export const FIREBASE_APP_CHECK_PUBLIC_KEY =
    process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_PUBLIC_KEY ||
    "6LcCUQokAAAAAJlz4bQxvlejvMVSR6rZUq4e1Vax";
export const FIRESTORE_EVENTS_QUERY_LIMIT = 2;

// URL Links
export const PROD_HOST = "https://keathongyouths.sg";
const LANDING_PAGE_BASE_URLS = {
    PROD: PROD_HOST,
    DEV: `http://localhost:${PORT}`,
    LOCAL: `http://localhost:${PORT}`
};

export const LANDING_PAGE_BASE_URL = LANDING_PAGE_BASE_URLS[ENVIRONMENT];
export const KHYN_VOLUNTEER_SIGN_UP_FORM_URL =
    "https://go.gov.sg/khynvolunteers";
export const KHYN_VOLUNTEER_SIGN_UP_FORM_URL_OLD =
    "https://docs.google.com/forms/d/e/1FAIpQLSeFxeOJYoBedxfsPpYWe_WSEk8yZYZ7iYb0dlFV7mbeqMzkUQ/viewform";
export const KHYN_TELEGRAM_URL = "https://t.me/+8Jo5iyac3AFiYTNk";
export const KHYN_GITHUB_URL = "https://github.com/KeatHongYN";
export const KHYN_FACEBOOK_URL = "https://www.facebook.com/KeatHongYouths";
export const KHYN_INSTAGRAM_URL = "https://www.instagram.com/keathongyouths";
export const KHYN_BETTERUPTIME_URL = "https://keathongyouths.betteruptime.com";
export const KHYN_KHR_URL = "https://keat-hong-recycles.web.app";
export const KHYN_LINKTREE_URL = "https://linktr.ee/keathongyn";
export const REPORT_ISSUE_URL =
    "https://github.com/KeatHongYN/khyn-landing/blob/master/SECURITY.md";

// REGEX
export const EMAIL_INCLUDED_REGEX =
    /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
export const HTTPS_INCLUDED_REGEX = /(https?:\/\/\S+)/gi;
export const EMAIL_OR_HTTPS_INCLUDED_REGEX =
    /(https?:\/\/\S+|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
