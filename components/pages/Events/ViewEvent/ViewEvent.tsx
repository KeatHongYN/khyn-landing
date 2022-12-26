/* eslint-disable no-unused-vars */
import { Icon } from "@iconify/react";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Pill from "../../../shared/Pill";
import ExternalLinkButton from "../../../shared/Button/ExternalLinkButton";
import Button from "../../../shared/Button";
import { ViewEventProps } from "./types";

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
    link
}: ViewEventProps): JSX.Element => {
    const router = useRouter();
    return (
        <>
            <div className="c-View-event__Middle c-Middle">
                <div className="c-Middle__Pic">
                    <Image priority src={image!} alt="Event poster" fill />
                </div>

                <div className="c-Middle__Info c-Info">
                    <h1>{title}</h1>
                    <span className="c-Info__Pill">
                        {volunteersNeeded ? (
                            <Pill text="Volunteers Needed" />
                        ) : null}
                    </span>
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
                            <p>{date || "-"}</p>
                        </span>
                        <span className="c-Date-and-time__Time c-Time">
                            <Icon
                                className="c-Time__Icon"
                                icon="bx:time-five"
                            />
                            <p>{time || "-"}</p>
                        </span>
                    </div>
                    <div className="c-Info__Price">
                        <h2>{price || "-"}</h2>
                        <p>
                            View the full prices on the event&apos;s page/form
                        </p>
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
                    onClickFn={() => router.push("/")}
                    arrow
                />
            </div>
        </>
    );
};

export default ViewEvent;
