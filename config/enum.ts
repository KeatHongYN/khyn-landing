/* eslint-disable no-unused-vars */

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

export enum TESTIMONIAL_BG_ENUM {
    PURPLE = "PURPLE",
    RADISH = "RADISH",
    BLUE = "BLUE"
}

export const TESTIMONIAL_BG_META = {
    [TESTIMONIAL_BG_ENUM.PURPLE]: {
        classSuffix: "purple"
    },
    [TESTIMONIAL_BG_ENUM.RADISH]: {
        classSuffix: "radish"
    },
    [TESTIMONIAL_BG_ENUM.BLUE]: {
        classSuffix: "blue"
    }
};

export enum ApiErrorCode {
    SUCCESS = 0,
    SERVER_ERROR = 1,
    INVALID_PARAMS = 2,
    INVALID_METHOD = 3
}

export const API_ERROR_CODE_MSG = {
    [ApiErrorCode.SUCCESS]: "Success.",
    [ApiErrorCode.SERVER_ERROR]: "Server error.",
    [ApiErrorCode.INVALID_PARAMS]: "Invalid parameters.",
    [ApiErrorCode.INVALID_METHOD]: "Method not allowed."
};
