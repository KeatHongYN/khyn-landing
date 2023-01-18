/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../../layout/MainLayout";
import EventList from "./EventList";
import EventListSkeleton from "./EventListSkeleton";
import Error from "../../shared/Error";
import { ERROR_ENUM, ERROR_META } from "../../../config/error";
import firebaseFn from "../../../utils/firebase";
import { APIFormatState } from "../../../utils/types";
// import { DEBUG } from "../../../utils/logger";

const EventsPage = (): JSX.Element => {
    const [getEventsResult, setGetEventsResult] = useState<APIFormatState>({
        success: false,
        data: null,
        errorType: ERROR_ENUM.FIREBASE_INVALID_EVENT_ID,
        loading: true
    });
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const [success, data, errorType] = await firebaseFn.getEvents();
            setGetEventsResult({
                success,
                data,
                errorType,
                loading: false
            });
        })();
    }, []);

    const renderListControl = (): JSX.Element => {
        if (getEventsResult.loading) {
            return <EventListSkeleton />;
        }
        if (getEventsResult.success) {
            return <EventList events={getEventsResult.data} />;
        }
        return (
            <Error message={ERROR_META[getEventsResult.errorType!].message} />
        );
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
