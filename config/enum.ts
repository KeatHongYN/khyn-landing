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

export enum PAGINATION_ACTION_ENUM {
    NONE = "NONE",
    NEXT = "NEXT",
    PREV = "PREV"
}
