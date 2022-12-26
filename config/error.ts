/* eslint-disable no-unused-vars */
export enum ERROR_ENUM {
    // Page error
    PAGE_NOT_FOUND = 1000,
    SERVER_ERROR = 1001,
    GENERIC = 1002,

    // User error
    INVALID_EVENT_ID = 2000,

    // Firebase error
    FIREBASE_FAILURE = 3000,
    FIREBASE_INVALID_EVENT_ID = 3001
}

export const ERROR_META = {
    [ERROR_ENUM.PAGE_NOT_FOUND]: {
        errorCode: ERROR_ENUM[ERROR_ENUM.PAGE_NOT_FOUND],
        errorType: "ERROR_ENUM.PAGE_NOT_FOUND",
        message: "Page not found."
    },
    [ERROR_ENUM.SERVER_ERROR]: {
        errorCode: ERROR_ENUM[ERROR_ENUM.SERVER_ERROR],
        errorType: "ERROR_ENUM.SERVER_ERROR",
        message: "Server error."
    },
    [ERROR_ENUM.GENERIC]: {
        errorCode: ERROR_ENUM[ERROR_ENUM.GENERIC],
        errorType: "ERROR_ENUM.GENERIC",
        message: "Generic error."
    },
    [ERROR_ENUM.INVALID_EVENT_ID]: {
        errorCode: ERROR_ENUM[ERROR_ENUM.INVALID_EVENT_ID],
        errorType: "ERROR_ENUM.INVALID_EVENT_ID",
        message: "Event ID is invalid!"
    },
    [ERROR_ENUM.FIREBASE_FAILURE]: {
        errorCode: ERROR_ENUM[ERROR_ENUM.FIREBASE_FAILURE],
        errorType: "ERROR_ENUM.FIREBASE_FAILURE",
        message: "Something went wrong!"
    },
    [ERROR_ENUM.FIREBASE_INVALID_EVENT_ID]: {
        errorCode: ERROR_ENUM[ERROR_ENUM.FIREBASE_INVALID_EVENT_ID],
        errorType: "ERROR_ENUM.FIREBASE_INVALID_EVENT_ID",
        message: "Event ID is invalid!"
    }
};

export const ERROR_PAGE_META = {
    [ERROR_ENUM.PAGE_NOT_FOUND]: {
        classSuffix: "page-not-found",
        header: "Page not found.",
        desc: "Hmm... We couldn't find the specified resource."
    },
    [ERROR_ENUM.SERVER_ERROR]: {
        classSuffix: "server-error",
        header: "Server error.",
        desc: "Something went wrong. Please try again later."
    },
    [ERROR_ENUM.GENERIC]: {
        classSuffix: "generic",
        header: "Something went wrong.",
        desc: "An unknown error has occured. Please try again later."
    }
};
