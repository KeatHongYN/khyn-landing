import React, { useEffect, useState } from "react";
import EventListItem from "../../shared/EventListItem";
import EventListItemSkeleton from "../../shared/EventListItem/EventListItemSkeleton";
import { MOCK_EVENTS } from "../../../config/mock";
import MainLayout from "../../../layout/MainLayout";
import {
    formatDate,
    formatPrice,
    formatTime,
    recursiveCamelCase
} from "../../../utils/helper";
import NoEvents from "./NoEvents";
import { EventType, SingularRawCamelCasedEvent } from "./types";

const EventsPage = (): JSX.Element => {
    const [events, setEvents] = useState<EventType | []>([]);
    const [loadingEvents, setLoadingEvents] = useState(true);

    useEffect(() => {
        let formattedEvents = recursiveCamelCase(MOCK_EVENTS);
        formattedEvents = formattedEvents.map(
            (oneEvent: SingularRawCamelCasedEvent) => ({
                ...oneEvent,
                date: formatDate(oneEvent.date),
                time: formatTime(oneEvent.time),
                price: formatPrice(oneEvent.price, oneEvent.multiplePrice)
            })
        );
        setEvents(formattedEvents);
        setLoadingEvents(false);
    }, []);

    return (
        <MainLayout title="Events - Keat Hong Youth Network">
            <div className="c-Events">
                <div className="c-Events__Top">
                    <h1>Upcoming Events</h1>
                    <p>Check out the latest events that is happening!</p>
                </div>
                <div className="c-Events__List c-List">
                    {loadingEvents
                        ? renderEventListSkeleton()
                        : renderEventList(events)}
                </div>
            </div>
        </MainLayout>
    );
};

export default EventsPage;

const renderEventListSkeleton = (): JSX.Element => {
    return (
        <>
            {MOCK_EVENTS.map((event, index) => (
                <span key={index}>
                    <EventListItemSkeleton />
                    {index !== MOCK_EVENTS.length - 1 ? (
                        <hr className="c-List__HR c-HR" />
                    ) : null}
                </span>
            ))}
        </>
    );
};

const renderEventList = (events: EventType | []): JSX.Element => {
    return (
        <>
            {events.length ? (
                events.map((event, index) => (
                    <span key={`event-${index}`}>
                        <EventListItem {...event} />
                        {index !== events.length - 1 ? (
                            <hr className="c-List__HR c-HR" />
                        ) : null}
                    </span>
                ))
            ) : (
                <NoEvents />
            )}
        </>
    );
};
