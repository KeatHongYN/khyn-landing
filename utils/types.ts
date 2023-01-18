/* eslint-disable no-unused-vars */

import { ERROR_ENUM } from "../config/error";

// helper.ts
export type FormatPriceRV = string | null | undefined;

export interface FormatDateParams {
    start: any;
    end: any;
}
export type FormatDateRV = string | null | Date;

interface SeparateTimeFormat {
    hour: number | null;
    minute: number | null;
}
export interface FormatTimeParams {
    start: SeparateTimeFormat | null;
    end: SeparateTimeFormat | null;
}
export type FormatTimeRV = string | null;

// logger.ts
export interface LogFn {
    (message?: any, ...optionalParams: any[]): void;
}

export interface Logger {
    log: LogFn;
    warn: LogFn;
    error: LogFn;
}

export type LogLevel = "log" | "warn" | "error";

export interface APIFormatState {
    success: boolean;
    data: any;
    errorType: ERROR_ENUM | null;
    loading: boolean;
}

export type APIFormat = [boolean, any, ERROR_ENUM | null];
