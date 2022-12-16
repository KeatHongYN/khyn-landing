
export const ENVIRONMENT = process.env.REACT_APP_ENVIONMENT ? process.env.REACT_APP_ENVIONMENT : "prod";
export const IS_DEV_ENV = ENVIRONMENT === "dev";
export const VERSION_NO = `LANDING-1.0.0${IS_DEV_ENV ? "-DEV" : ""}`;

// Enums and its relative meta info
export enum ERROR_PAGE_ENUM {
    PAGE_NOT_FOUND = "PAGE_NOT_FOUND",
    GENERIC = "GENERIC"
};

export const ERROR_PAGE_META = {
    [ERROR_PAGE_ENUM.PAGE_NOT_FOUND]: {
        classSuffix: "page-not-found",
        header: "Page not found.",
        desc: "Hmm... We couldn't find the specified resource."
    },
    [ERROR_PAGE_ENUM.GENERIC]: {
        classSuffix: "generic",
        header: "Something went wrong.",
        desc: "An unknown error has occured. Please try again later.."
    }
};

export enum BTN_VARIATION_ENUM {
    PRIMARY = "PRIMARY",
    PRIMARY_EMPTY = "PRIMARY_EMPTY",
    DANGER = "DANGER",
    KOSONG = "KOSONG"
};

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
};

export const FLAG_BANNER_META = {
    [FLAG_BANNER_VARIATION_ENUM.DEV]: {
        classSuffix: "Dev"
    },
};

export enum PILL_VARIATION_ENUM {
    GRADIENT_IG = "GRADIENT_IG",
    WARNING = "WARNING"
};

export const PILL_META = {
    [PILL_VARIATION_ENUM.GRADIENT_IG]: {
        classSuffix: "Gradient-ig"
    },
    [PILL_VARIATION_ENUM.WARNING]: {
        classSuffix: "Warning"
    }
};
