/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import Pill from "../Pill";
import { EventListItemProps } from "./types";
import FirebaseImage from "../FirebaseImage";
import { PILL_VARIATION_ENUM } from "../../../config/enum";

const EventListItem = ({
    id,
    title,
    location,
    date,
    time,
    volunteersNeeded,
    image,
    price,
    formattedDate,
    formattedTime,
    formattedPrice
}: EventListItemProps): JSX.Element => {
    const router = useRouter();
    const [isEventInProgress, setIsEventInProgress] = useState(false);
    const [isEventOver, setIsEventOver] = useState(false);

    useEffect(() => {
        const timeNowUnix = Date.now();
        const startDate =
            (date?.start?.seconds &&
                parseInt(date?.start?.seconds, 10) * 1000) ||
            null;
        const endDate =
            (date?.end?.seconds && parseInt(date?.end?.seconds, 10) * 1000) ||
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
        <div
            className="c-Event-list-item"
            role="button"
            onClick={() => router.push(`/events/${id}`)}
        >
            <FirebaseImage
                filePath={image}
                className="c-Event-list-item__Img c-Img"
                otherImageProps={{
                    alt: "Image",
                    width: "200",
                    height: "200"
                }}
            />
            <div className="c-Event-list-item__Desc c-Desc">
                <h1>{title}</h1>
                <span className="c-Desc__Location c-Location">
                    <Icon
                        className="c-Location__Icon"
                        icon="akar-icons:location"
                    />
                    <p>{location || "-"}</p>
                </span>
                <div className="c-Desc__Date-and-time c-Date-and-time">
                    <span className="c-Date-and-time__Date c-Date">
                        <Icon
                            className="c-Date__Icon"
                            icon="akar-icons:calendar"
                        />
                        <p>{formattedDate || "-"}</p>
                    </span>
                    <span className="c-Date-and-time__Time c-Time">
                        <Icon className="c-Time__Icon" icon="bx:time-five" />
                        <p>{formattedTime || "-"}</p>
                    </span>
                </div>
                <div className="c-Desc__Bottom c-Bottom">
                    {renderPill()}
                    <h2>{formattedPrice}</h2>
                </div>
            </div>
        </div>
    );
};

export default EventListItem;
