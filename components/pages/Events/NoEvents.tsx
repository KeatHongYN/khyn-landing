import React from "react";
import { Icon } from "@iconify/react";

const NoEvents = (): JSX.Element => (
    <div className="c-No-events">
        <span className="c-No-events__Icon-container">
            <Icon className="c-No-events__Icon" icon="fe:search" />
        </span>
        <h1>No events found</h1>
        <p>There aren&apos;t any results for this query.</p>
    </div>
);

export default NoEvents;
