import { ERROR_ENUM } from "../../../config/error";

export interface EventsPageProps {
    getEventsResult: {
        success: boolean;
        data: any[];
        errorType: ERROR_ENUM | null;
    };
}

interface SeparateTimeFormat {
    hour: number | null;
    minute: number | null;
}
// Raw data but camelCased
export interface SingularRawCamelCasedEvent {
    id: string;
    title: string;
    description: string;
    location: string;
    date: {
        start: string | null;
        end: string | null;
    };
    time: {
        // 24 hr format
        start: SeparateTimeFormat;
        end: SeparateTimeFormat;
    };
    volunteersNeeded: boolean;
    image: string | null;
    price: number | null | undefined;
    multiPrice: boolean;
    link: string | null;
}

export interface SingularEvent extends SingularRawCamelCasedEvent {
    formattedDate: string | null;
    formattedTime: string | null;
    formattedPrice: string | null | undefined;
}

export type EventType = SingularEvent[];

export interface EventListProps {
    events: EventType | [] | null;
}
