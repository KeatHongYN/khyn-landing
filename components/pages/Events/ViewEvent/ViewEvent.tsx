/* eslint-disable no-unused-vars */
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Pill from "../../../shared/Pill";
import ExternalLinkButton from "../../../shared/Button/ExternalLinkButton";
import Button from "../../../shared/Button";
import { ViewEventProps } from "./types";
import { PILL_VARIATION_ENUM } from "../../../../config/enum";

const ViewEvent = ({
    id,
    title,
    description,
    location,
    date,
    time,
    volunteersNeeded,
    image,
    price,
    multiPrice,
    link,
    formattedDate,
    formattedTime,
    formattedPrice
}: ViewEventProps): JSX.Element => {
    const router = useRouter();

    const renderPill = (): JSX.Element | null => {
        if (date) {
            const timeNowUnix = Date.now();
            const startDate = (date.start && parseInt(date.start, 10)) || null;
            const endDate = (date.end && parseInt(date.end, 10)) || null;

            if (
                startDate &&
                endDate &&
                startDate >= timeNowUnix &&
                endDate <= timeNowUnix
            ) {
                return (
                    <Pill
                        text="Event in progress"
                        variation={PILL_VARIATION_ENUM.WARNING}
                    />
                );
            }

            if (
                (startDate && startDate < timeNowUnix) ||
                (endDate && endDate < timeNowUnix)
            ) {
                return (
                    <Pill
                        text="Event is over"
                        variation={PILL_VARIATION_ENUM.WARNING}
                    />
                );
            }
        }

        if (volunteersNeeded) {
            return <Pill text="Volunteers Needed" />;
        }

        return null;
    };

    return (
        <>
            <div className="c-View-event__Middle c-Middle">
                <div className="c-Middle__Pic">
                    <Image
                        priority
                        src={image!}
                        alt="Event poster"
                        width={300}
                        height={300}
                    />
                </div>

                <div className="c-Middle__Info c-Info">
                    <h1>{title}</h1>
                    <span className="c-Info__Pill">{renderPill()}</span>
                    <span className="c-Info__Location c-Location">
                        <Icon
                            className="c-Location__Icon"
                            icon="akar-icons:location"
                        />
                        <p>{location}</p>
                    </span>
                    <div className="c-Info__ c-Date-and-time">
                        <span className="c-Date-and-time__Date c-Date">
                            <Icon
                                className="c-Date__Icon"
                                icon="akar-icons:calendar"
                            />
                            <p>{formattedDate || "-"}</p>
                        </span>
                        <span className="c-Date-and-time__Time c-Time">
                            <Icon
                                className="c-Time__Icon"
                                icon="bx:time-five"
                            />
                            <p>{formattedTime || "-"}</p>
                        </span>
                    </div>
                    <div className="c-Info__Price">
                        <h2>{formattedPrice || "-"}</h2>
                        {multiPrice ? (
                            <p>
                                View the full prices on the event&apos;s
                                page/form
                            </p>
                        ) : null}
                    </div>
                    <ExternalLinkButton
                        disabled={!!link}
                        href={link || ""}
                        text="Find out more"
                    />
                </div>
            </div>

            <div className="c-View-event__Desc">
                <h2>Event Description</h2>
                <p>
                    {description || "The admin has not added any description."}
                </p>
            </div>

            <hr />

            <div className="c-View-event__View-all-events">
                <Button
                    text="Back to all events"
                    onClickFn={() => router.push("/events")}
                    arrow
                />
            </div>
        </>
    );
};

export default ViewEvent;
