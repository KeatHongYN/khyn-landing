/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import MainLayout from "../../../layout/MainLayout";
import EventList from "./EventList";
import EventListSkeleton from "./EventListSkeleton";
import Error from "../../shared/Error";
import { ERROR_ENUM, ERROR_META } from "../../../config/error";
import firebaseFn from "../../../utils/firebase";
import { APIFormatState } from "../../../utils/types";
import { IPaginationObj } from "./types";
import { PAGINATION_ACTION_ENUM } from "../../../config/enum";
import Button from "../../shared/Button";
import { calcPaginationStatus } from "../../../utils/helper";
// import { DEBUG } from "../../../utils/logger";

const EventsPage = (): JSX.Element => {
    const [getEventsResult, setGetEventsResult] = useState<APIFormatState>({
        success: false,
        data: null,
        errorType: ERROR_ENUM.FIREBASE_INVALID_EVENT_ID,
        loading: true
    });
    const [getNoOfEventsResult, setGetNoOfEventsResult] =
        useState<APIFormatState>({
            success: false,
            data: null,
            errorType: ERROR_ENUM.FIREBASE_INVALID_EVENT_ID,
            loading: true
        });
    const [paginationObj, setPaginationObj] = useState<IPaginationObj>({
        page: 1,
        actionType: PAGINATION_ACTION_ENUM.NONE,
        nextExist: false,
        prevExist: false,
        firstVisible: null,
        lastVisible: null
    });

    useEffect(() => {
        (async () => {
            // Get all events
            const [getEventsSuccess, getEventsData, getEventsErrorType] =
                await firebaseFn.getEvents(paginationObj);
            setGetEventsResult({
                success: getEventsSuccess,
                data: getEventsData.events,
                errorType: getEventsErrorType,
                loading: false
            });
            setPaginationObj(getEventsData.newPaginationObj);
            // Get total events count
            const [
                getNoOfEventsSuccess,
                getNoOfEventsData,
                getNoOfEventsErrorType
            ] = await firebaseFn.getNoOfEvents();
            setGetNoOfEventsResult({
                success: getNoOfEventsSuccess,
                data: getNoOfEventsData,
                errorType: getNoOfEventsErrorType,
                loading: false
            });
        })();
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [paginationObj]);

    const handlePagination = async (actionType: PAGINATION_ACTION_ENUM) => {
        setGetEventsResult((prev) => ({
            ...prev,
            actionType,
            loading: true
        }));
        const [getEventsSuccess, getEventsData, getEventsErrorType] =
            await firebaseFn.getEvents({ ...paginationObj, actionType });
        setGetEventsResult({
            success: getEventsSuccess,
            data: getEventsData.events,
            errorType: getEventsErrorType,
            loading: false
        });
        setPaginationObj(getEventsData.newPaginationObj);
    };

    const renderListControl = (): JSX.Element => {
        if (getEventsResult.loading) {
            return <EventListSkeleton />;
        }
        if (getEventsResult.success) {
            return <EventList events={getEventsResult.data} />;
        }
        return (
            <Error message={ERROR_META[getEventsResult.errorType!]?.message} />
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
                <div className="c-Events__Pagination c-Pagination">
                    <div className="c-Pagination__Results">
                        <p>
                            Viewing{" "}
                            <b>
                                {calcPaginationStatus(
                                    paginationObj.page,
                                    getEventsResult.data?.length
                                )}
                            </b>{" "}
                            results of <b>{getNoOfEventsResult.data}</b>
                        </p>
                    </div>
                    <div className="c-Pagination__Btns">
                        <Button
                            text="Prev"
                            disabled={!paginationObj.prevExist}
                            onClickFn={() =>
                                handlePagination(PAGINATION_ACTION_ENUM.PREV)
                            }
                        />
                        <Button
                            text="Next"
                            disabled={!paginationObj.nextExist}
                            onClickFn={() =>
                                handlePagination(PAGINATION_ACTION_ENUM.NEXT)
                            }
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default EventsPage;
