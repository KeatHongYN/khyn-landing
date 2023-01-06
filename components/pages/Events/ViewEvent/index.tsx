import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../../../layout/MainLayout";
import Error from "../../../shared/Error";
import ViewEvent from "./ViewEvent";
import NotFound from "../../../shared/Error/NotFound";
import { ERROR_ENUM, ERROR_META } from "../../../../config/error";
import firebaseFn from "../../../../utils/firebase";
import { APIFormatState } from "../../../../utils/types";
import ViewEventSkeleton from "./ViewEventSkeleton";

function ViewEventPage(): JSX.Element {
    const router = useRouter();
    const { eventId } = router.query;
    const [getEventResult, setGetEventResult] = useState<APIFormatState>({
        success: false,
        data: null,
        errorType: null,
        loading: true
    });

    useEffect(() => {
        (async () => {
            if (!router.isReady) {
                return;
            }
            if (eventId) {
                const [success, data, errorType] = await firebaseFn.getEvent(
                    eventId as string
                );
                setGetEventResult({
                    success,
                    data,
                    errorType,
                    loading: false
                });
            } else {
                setGetEventResult((prevValue) => ({
                    ...prevValue,
                    errorType: ERROR_ENUM.INVALID_EVENT_ID,
                    loading: false
                }));
            }
        })();
    }, [router.isReady]);

    const renderListControl = (): JSX.Element => {
        if (getEventResult.loading) {
            return <ViewEventSkeleton />;
        }
        if (
            getEventResult.errorType === ERROR_ENUM.FIREBASE_INVALID_EVENT_ID ||
            getEventResult.errorType === ERROR_ENUM.INVALID_EVENT_ID
        ) {
            return <NotFound />;
        }
        if (getEventResult.success) {
            return <ViewEvent {...getEventResult.data} />;
        }
        return (
            <Error message={ERROR_META[getEventResult.errorType!].message} />
        );
    };
    return (
        <MainLayout title="View Event - Keat Hong Youth Network">
            <div
                className={`c-View-event${
                    getEventResult.loading ? "-skeleton" : ""
                }`}
            >
                <div
                    className={`c-View-event${
                        getEventResult.loading ? "-skeleton__Top" : "__Top"
                    }`}
                >
                    <Breadcrumbs separator=">" className="l-Breadcrumb">
                        <Link href="/">Home</Link>
                        <Link href="/events">Events</Link>
                        <h2>View Event</h2>
                    </Breadcrumbs>
                </div>
                {renderListControl()}
            </div>
        </MainLayout>
    );
}

export default ViewEventPage;
