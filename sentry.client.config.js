import * as Sentry from "@sentry/nextjs";
import {
    DEBUG,
    ENVIRONMENT,
    ENVIRONMENT_ENUMS,
    SENTRY_DSN,
    VERSION
} from "./config/constants";

Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 0.5,
    debug: DEBUG,
    release: VERSION,
    environment: ENVIRONMENT,
    enabled:
        ENVIRONMENT === ENVIRONMENT_ENUMS.PROD ||
        ENVIRONMENT === ENVIRONMENT_ENUMS.DEV
    // ...
    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
});
