import React from "react";
import { Skeleton } from "@mui/material";

const EventListItemSkeleton = (): JSX.Element => (
    <div className="c-Event-list-item-skeleton">
        <div className="c-Event-list-item-skeleton__Img c-Img">
            <Skeleton variant="rectangular" width={200} height={200} />
        </div>
        <div className="c-Event-list-item-skeleton__Desc c-Desc">
            <Skeleton width={300} height={30} />
            <Skeleton width={150} height={30} />
            <div className="c-Desc__Date-and-time c-Date-and-time">
                <Skeleton className="c-Date" width={100} height={30} />
                <Skeleton className="c-Time" width={50} height={30} />
            </div>
        </div>
    </div>
);

export default EventListItemSkeleton;
