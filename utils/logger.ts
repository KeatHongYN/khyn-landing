/* eslint-disable no-console */
import * as Sentry from "@sentry/nextjs";
import { ENVIRONMENT, ENVIRONMENT_ENUMS } from "../config/constants";
import { LogFn, Logger } from "./types";

const NO_OPERATION: LogFn = () => {};

/** Logger which outputs to the browser console (only available for dev environment) */
export class DebugConsoleLogger implements Logger {
    readonly log: LogFn;

    readonly warn: LogFn;

    readonly error: LogFn;

    constructor() {
        if (ENVIRONMENT === ENVIRONMENT_ENUMS.PROD) {
            this.log = NO_OPERATION;
            this.warn = NO_OPERATION;
            this.error = NO_OPERATION;
            return;
        }

        const timestamp = new Date().toLocaleTimeString();
        const prefix = `[DEBUG - ${timestamp}]`;

        this.log = console.log.bind(console, prefix);
        this.warn = console.warn.bind(console, prefix);
        this.error = console.error.bind(console, prefix);
    }
}

export const DEBUG = new DebugConsoleLogger();

export const logSentryException = (
    errorEnum: string,
    caller: string,
    others?: string | undefined | null
) => {
    DEBUG.log("Sending error to Sentry via `logSentryError`...");
    Sentry.withScope((scope) => {
        scope.setLevel("fatal");
        Sentry.captureException(
            `[App Error] Error Enum: ${errorEnum} | Method Name: ${caller} | ${others}`
        );
    });
    DEBUG.log("Successfully sent error to Sentry via `logSentryError`!");
};
