/* eslint-disable no-unused-vars */
// helper.ts
export type FormatPriceRV = string | null | undefined;

export interface FormatDateParams {
    start: string | null;
    end: string | null;
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
