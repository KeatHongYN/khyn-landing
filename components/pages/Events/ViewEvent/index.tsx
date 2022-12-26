import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import MainLayout from "../../../../layout/MainLayout";
import { ViewEventPageProps } from "./types";
import Error from "../../../shared/Error";
import ViewEvent from "./ViewEvent";
import NotFound from "../../../shared/Error/NotFound";
import { ERROR_ENUM, ERROR_META } from "../../../../config/error";

function ViewEventPage({
    getEventResult: { success, data, errorType }
}: ViewEventPageProps): JSX.Element {
    const renderListControl = (): JSX.Element => {
        if (
            errorType === ERROR_ENUM.FIREBASE_INVALID_EVENT_ID ||
            errorType === ERROR_ENUM.INVALID_EVENT_ID
        ) {
            return <NotFound />;
        }
        if (success) {
            return <ViewEvent {...data} />;
        }
        return <Error message={ERROR_META[errorType!].message} />;
    };
    return (
        <MainLayout title="View Event - Keat Hong Youth Network">
            <div className="c-View-event">
                <div className="c-View-event__Top">
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
