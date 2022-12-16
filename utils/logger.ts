import { ENVIRONMENT } from "../config/constants";
import { LogFn, Logger } from "./types";

const NO_OPERATION: LogFn = (message?: any, ...optionalParams: any[]) => {};

/** Logger which outputs to the browser console (only available for dev environment) */
export class DebugConsoleLogger implements Logger {
  readonly log: LogFn;
  readonly warn: LogFn;
  readonly error: LogFn;

  constructor() {

    if (ENVIRONMENT === "prod") {
      this.log = NO_OPERATION;
      this.warn = NO_OPERATION;
      this.error = NO_OPERATION;
      return;
    }

    const timestamp = (new Date).toLocaleTimeString();
    const prefix = `[DEBUG - ${timestamp}]`;

    this.log = console.log.bind(console, prefix);
    this.warn = console.warn.bind(console, prefix);
    this.error = console.error.bind(console, prefix);
  }
}

export const DEBUG = new DebugConsoleLogger();
