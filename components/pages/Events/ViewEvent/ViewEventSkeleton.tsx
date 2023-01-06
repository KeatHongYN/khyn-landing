import { Icon } from "@iconify/react";
import { Skeleton } from "@mui/material";
import Button from "../../../shared/Button";
import ExternalLinkButton from "../../../shared/Button/ExternalLinkButton";

const ViewEventSkeleton = (): JSX.Element => (
    <>
        <div className="c-View-event-skeleton__Middle c-Middle">
            <div className="c-Middle__Pic">
                <Skeleton variant="rectangular" width={300} height={300} />
            </div>

            <div className="c-Middle__Info c-Info">
                <Skeleton className="c-Info__Name" width={300} height={30} />
                <Skeleton width={50} height={30} />
                <span className="c-Info__Location c-Location">
                    <Icon
                        className="c-Location__Icon"
                        icon="akar-icons:location"
                    />
                    <Skeleton width={50} height={30} />
                </span>
                <div className="c-Info__Date-and-time c-Date-and-time">
                    <span className="c-Date-and-time__Date c-Date">
                        <Icon
                            className="c-Date__Icon"
                            icon="akar-icons:calendar"
                        />
                        <Skeleton width={50} height={30} />
                    </span>
                    <span className="c-Date-and-time__Time c-Time">
                        <Icon className="c-Time__Icon" icon="bx:time-five" />
                        <Skeleton width={50} height={30} />
                    </span>
                </div>
                <div className="c-Info__Price">
                    <Skeleton width={50} height={30} />
                </div>
                <ExternalLinkButton disabled href="" text="Find out more" />
            </div>
        </div>

        <div className="c-View-event-skeleton__Desc">
            <h2>Event Description</h2>
            <Skeleton variant="rectangular" width={500} height={100} />
        </div>

        <hr />

        <div className="c-View-event-skeleton__View-all-events">
            <Button disabled text="Back to all events" arrow />
        </div>
    </>
);

export default ViewEventSkeleton;
