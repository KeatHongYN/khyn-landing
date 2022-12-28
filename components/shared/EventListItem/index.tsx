/* eslint-disable no-unused-vars */
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Pill from "../Pill";
import { EventListItemProps } from "./types";

const NoImage = (): JSX.Element => (
    <div className="c-No-image">
        <Icon className="c-No-image__Icon" icon="carbon:no-image" />
        <p>No image</p>
    </div>
);

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

    return (
        <div
            className="c-Event-list-item"
            role="button"
            onClick={() => router.push(`/events/${id}`)}
        >
            <div className="c-Event-list-item__Img c-Img">
                {image ? (
                    <Image
                        blurDataURL="URL"
                        placeholder="blur"
                        src={image}
                        alt="Event poster"
                        width={200}
                        height={200}
                    />
                ) : (
                    <NoImage />
                )}
            </div>
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
                    {volunteersNeeded ? (
                        <Pill text="Volunteers Needed" />
                    ) : null}
                    <h2>{formattedPrice}</h2>
                </div>
            </div>
        </div>
    );
};

export default EventListItem;
