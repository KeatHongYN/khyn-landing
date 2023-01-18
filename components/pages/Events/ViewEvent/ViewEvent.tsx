/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Pill from "../../../shared/Pill";
import ExternalLinkButton from "../../../shared/Button/ExternalLinkButton";
import Button from "../../../shared/Button";
import { ViewEventProps } from "./types";
import { PILL_VARIATION_ENUM } from "../../../../config/enum";
import firebaseFn from "../../../../utils/firebase";
import FirebaseImage from "../../../shared/FirebaseImage";

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
    const [isEventInProgress, setIsEventInProgress] = useState(false);
    const [isEventOver, setIsEventOver] = useState(false);

    useEffect(() => {
        const timeNowUnix = Date.now();
        const startDate =
            (date.start?.seconds && parseInt(date.start?.seconds, 10) * 1000) ||
            null;
        const endDate =
            (date.end?.seconds && parseInt(date.end?.seconds, 10) * 1000) ||
            null;

        if (startDate && endDate) {
            if (startDate <= timeNowUnix && endDate >= timeNowUnix) {
                setIsEventInProgress(true);
            }
        }
        if (
            (startDate && !endDate && startDate < timeNowUnix) ||
            (endDate && endDate < timeNowUnix)
        ) {
            setIsEventOver(true);
        }
    }, []);

    const renderPill = (): JSX.Element | null => {
        if (date) {
            if (isEventInProgress) {
                return (
                    <Pill
                        text="Event in progress"
                        variation={PILL_VARIATION_ENUM.WARNING}
                    />
                );
            }

            if (isEventOver) {
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
                <div className="c-Middle__Pic c-Pic">
                    <FirebaseImage
                        filePath={image}
                        className="c-Pic__Img c-Img"
                        otherImageProps={{
                            alt: "Image",
                            width: "300",
                            height: "300"
                        }}
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
                    <div className="c-Info__Date-and-time c-Date-and-time">
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
                        disabled={!link || isEventOver}
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
