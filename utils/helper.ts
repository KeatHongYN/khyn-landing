import { camelCase } from "change-case";
import dayjs from "dayjs";
import { FIRESTORE_EVENTS_QUERY_LIMIT } from "../config/constants";
import {
    FormatDateParams,
    FormatDateRV,
    FormatPriceRV,
    FormatTimeParams
} from "./types";

export const recursiveCamelCase = (item: any): any => {
    if (item instanceof Array) {
        return item.map((value) => recursiveCamelCase(value));
    }
    if (item !== null && item !== undefined && item.constructor === Object) {
        return Object.keys(item).reduce((result: any, key) => {
            result[camelCase(key)] = recursiveCamelCase(item[key]);
            return result;
        }, {});
    }
    return item;
};

export const formatPrice = (
    price: number | null | undefined,
    multiPrice: boolean = false
): FormatPriceRV => {
    if (price === null || price === undefined) return price;

    if (price === 0) return "FREE";

    const formattedPrice = `S$${price.toFixed(2)}${multiPrice ? "+" : ""}`;
    return formattedPrice;
};

export const formatDate = (date: FormatDateParams): FormatDateRV => {
    if (!date) return null;
    const { start, end } = date;
    if (!start && !end) return null;

    let formattedDate = null;
    const makeDateReadable = (date: string) =>
        dayjs(parseInt(date, 10) * 1000).format("DD MMM YYYY");

    if (start) {
        formattedDate = makeDateReadable(start.seconds);
    }

    if (!end) return formattedDate;

    if (start && end) {
        formattedDate = `${formattedDate} - ${makeDateReadable(end.seconds)}`;
    } else {
        formattedDate = makeDateReadable(end.seconds);
    }

    return formattedDate;
};

export const formatTime = (time: FormatTimeParams): string | null => {
    if (!time) return null;

    const { start, end } = time;

    if (!start?.hour && !start?.minute && !end?.hour && !end?.minute)
        return null;

    // Format start time first
    let formattedTime = "";
    if (start?.hour || start?.minute) {
        if (!start.hour) {
            start.hour = 0;
        }
        if (!start.minute) {
            start.minute = 0;
        }
        const startHourStr = start?.hour?.toString();
        const startMinStr = start?.minute?.toString();
        formattedTime = `${startHourStr!.padStart(
            2,
            "0"
        )}:${startMinStr!.padStart(2, "0")}`;
    }

    if (!end?.hour && !end?.minute) {
        return formattedTime;
    }

    if (!end.hour) {
        end.hour = 0;
    }
    if (!end.minute) {
        end.minute = 0;
    }

    // Format end time and combine
    const endHourStr = end?.hour?.toString();
    const endMinStr = end?.minute?.toString();
    formattedTime = `${formattedTime} - ${endHourStr!.padStart(
        2,
        "0"
    )}:${endMinStr!.padStart(2, "0")}`;

    return formattedTime;
};

export const calcPaginationStatus = (
    page: number,
    noOfItemsOnCurrentPage: number = 0
): string => {
    const start = noOfItemsOnCurrentPage
        ? (page - 1) * FIRESTORE_EVENTS_QUERY_LIMIT + 1
        : 0;
    const end = noOfItemsOnCurrentPage ? start + noOfItemsOnCurrentPage - 1 : 0;
    return `${start}-${end}`;
};
