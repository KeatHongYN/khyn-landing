/* eslint-disable no-unused-vars */
export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIONMENT
    ? process.env.NEXT_PUBLIC_ENVIONMENT
    : "dev";
export const VERSION_NO = `LANDING-1.0.0${ENVIRONMENT === "dev" ? "-DEV" : ""}`;

// Enums and its relative meta info
export enum ERROR_PAGE_ENUM {
    PAGE_NOT_FOUND = "PAGE_NOT_FOUND",
    SERVER_ERROR = "SERVER_ERROR",
    GENERIC = "GENERIC"
}

export const ERROR_PAGE_META = {
    [ERROR_PAGE_ENUM.PAGE_NOT_FOUND]: {
        classSuffix: "page-not-found",
        header: "Page not found.",
        desc: "Hmm... We couldn't find the specified resource."
    },
    [ERROR_PAGE_ENUM.SERVER_ERROR]: {
        classSuffix: "server-error",
        header: "Server error.",
        desc: "Something went wrong. Please try again later."
    },
    [ERROR_PAGE_ENUM.GENERIC]: {
        classSuffix: "generic",
        header: "Something went wrong.",
        desc: "An unknown error has occured. Please try again later."
    }
};

export enum BTN_VARIATION_ENUM {
    PRIMARY = "PRIMARY",
    PRIMARY_EMPTY = "PRIMARY_EMPTY",
    DANGER = "DANGER",
    KOSONG = "KOSONG"
}

export const BTN_META = {
    [BTN_VARIATION_ENUM.PRIMARY]: {
        classSuffix: "Primary"
    },
    [BTN_VARIATION_ENUM.PRIMARY_EMPTY]: {
        classSuffix: "Primary-empty"
    },
    [BTN_VARIATION_ENUM.DANGER]: {
        classSuffix: "Danger"
    },
    [BTN_VARIATION_ENUM.KOSONG]: {
        classSuffix: "Kosong"
    }
};

export enum FLAG_BANNER_VARIATION_ENUM {
    DEV = "DEV"
}

export const FLAG_BANNER_META = {
    [FLAG_BANNER_VARIATION_ENUM.DEV]: {
        classSuffix: "Dev"
    }
};

export enum PILL_VARIATION_ENUM {
    GRADIENT_IG = "GRADIENT_IG",
    WARNING = "WARNING",
    GREEN = "GREEN"
}

export const PILL_META = {
    [PILL_VARIATION_ENUM.GRADIENT_IG]: {
        classSuffix: "Gradient-ig"
    },
    [PILL_VARIATION_ENUM.WARNING]: {
        classSuffix: "Warning"
    },
    [PILL_VARIATION_ENUM.GREEN]: {
        classSuffix: "Green"
    }
};

// URL Links
export const KHYN_VOLUNTEER_SIGN_UP_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeFxeOJYoBedxfsPpYWe_WSEk8yZYZ7iYb0dlFV7mbeqMzkUQ/viewform";
export const KHYN_TELEGRAM_URL = "https://t.me/+8Jo5iyac3AFiYTNk";

// REGEX
export const EMAIL_INCLUDED_REGEX =
    /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
export const HTTPS_INCLUDED_REGEX = /(https?:\/\/\S+)/gi;
export const EMAIL_OR_HTTPS_INCLUDED_REGEX =
    /(https?:\/\/\S+|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

// Lists
export const FAQ_LIST = [
    {
        summary: "How do I join the YN as a volunteer?",
        details: `You may express to join us by indicating in this ${KHYN_VOLUNTEER_SIGN_UP_FORM_URL} Do follow us on Instagram or on our Telegram channel to stay abreast of the latest events, and sign up to volunteer in them whenever possible!`
    },
    {
        summary: "How do I join the interest groups of the YN?",
        details: `If you are interested in a particular interest group, you may express your interest to join in `
    },
    {
        summary: "How do I stay updated for all future events?",
        details: `Follow us on Instagram @keathongyouths and subscribe to our Telegram channel ${KHYN_TELEGRAM_URL}`
    },
    {
        summary: "I am keen to help plan a project. Where do I get started?",
        details:
            "You may contact any one of our YN members and he/she can follow up from there. It will be even better if you have a group of friends who are keen to do a project together!"
    },
    {
        summary: "Where does the YN get its funding from?",
        details:
            "The YN is under the umbrella of the PAYM, so we do receive some funding from the PA. We also have various partners which provide us with sponsorships and grants on an ad-hoc basis."
    },
    {
        summary:
            "I would like to collaborate with the YN. Who should I contact?",
        details: "Feel free to drop a DM to our Instagram or Facebook accounts."
    }
];
