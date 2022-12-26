/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import MainLayout from "../../../layout/MainLayout";
import { EventsPageProps, EventType } from "./types";
import EventList from "./EventList";
import EventListSkeleton from "./EventListSkeleton";
import Error from "../../shared/Error";
import { ERROR_META } from "../../../config/error";

const EventsPage = ({
    getEventsResult: { success, data, errorType }
}: EventsPageProps): JSX.Element => {
    const [events, setEvents] = useState<EventType | null>(null);
    const [loadingEvents, setLoadingEvents] = useState(false);

    useEffect(() => {
        if (success && data) {
            setEvents(data);
        }
    }, []);

    const renderListControl = (): JSX.Element => {
        if (loadingEvents) {
            return <EventListSkeleton />;
        }
        if (success) {
            return <EventList events={events} />;
        }
        return <Error message={ERROR_META[errorType!].message} />;
    };

    return (
        <MainLayout title="Events - Keat Hong Youth Network">
            <div className="c-Events">
                <div className="c-Events__Top">
                    <h1>Upcoming Events</h1>
                    <p>Check out the latest events that is happening!</p>
                </div>
                <div className="c-Events__List c-List">
                    {renderListControl()}
                </div>
            </div>
        </MainLayout>
    );
};

export default EventsPage;
