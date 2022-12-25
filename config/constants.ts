/* eslint-disable no-unused-vars */
/**
 * Contains general constants/config
 */

enum ENVIRONMENT_ENUMS {
    PROD = "PROD",
    DEV = "DEV",
    LOCAL = "LOCAL"
}

export const ENVIRONMENT: ENVIRONMENT_ENUMS = process.env.NEXT_PUBLIC_ENVIONMENT
    ? (process.env.NEXT_PUBLIC_ENVIONMENT as ENVIRONMENT_ENUMS)
    : ENVIRONMENT_ENUMS.PROD;
export const VERSION_NO = `LANDING-1.0.0${ENVIRONMENT === "DEV" ? "-DEV" : ""}`;
export const PORT = process.env.NEXT_PUBLIC_PORT
    ? process.env.NEXT_PUBLIC_PORT
    : 3000;

// URL Links
const LANDING_PAGE_BASE_URLS = {
    PROD: "https://keathongyouths.sg",
    DEV: `http://localhost:${PORT}`,
    LOCAL: `http://localhost:${PORT}`
};

export const LANDING_PAGE_BASE_URL = LANDING_PAGE_BASE_URLS[ENVIRONMENT];
export const KHYN_VOLUNTEER_SIGN_UP_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeFxeOJYoBedxfsPpYWe_WSEk8yZYZ7iYb0dlFV7mbeqMzkUQ/viewform";
export const KHYN_TELEGRAM_URL = "https://t.me/+8Jo5iyac3AFiYTNk";
export const KHYN_GITHUB_URL = "https://github.com/KeatHongYN";
export const KHYN_FACEBOOK_URL = "https://www.facebook.com/KeatHongYouths";
export const KHYN_INSTAGRAM_URL = "https://www.instagram.com/keathongyouths";
export const KHYN_BETTERUPTIME_URL = "https://keathongyouths.betteruptime.com";
export const KHYN_KHR_URL = "https://keat-hong-recycles.web.app";
export const KHYN_LINKTREE_URL = "https://linktr.ee/keathongyn";

// REGEX
export const EMAIL_INCLUDED_REGEX =
    /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
export const HTTPS_INCLUDED_REGEX = /(https?:\/\/\S+)/gi;
export const EMAIL_OR_HTTPS_INCLUDED_REGEX =
    /(https?:\/\/\S+|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
