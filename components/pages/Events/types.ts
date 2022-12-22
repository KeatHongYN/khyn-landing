interface SeparateTimeFormat {
    hour: number | null;
    minute: number | null;
}
// Raw data but camelCased
export interface SingularRawCamelCasedEvent {
    eventId: string;
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
    multiplePrice: boolean;
}

interface SingularEvent
    extends Omit<
        SingularRawCamelCasedEvent,
        "price" | "date" | "time" | "multiplePrice"
    > {
    date: string | null;
    time: string | null;
    price: string | null | undefined;
}

export type EventType = SingularEvent[];
