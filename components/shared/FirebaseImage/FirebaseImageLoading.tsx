import { Skeleton } from "@mui/material";
import React from "react";

interface FirebaseImageLoadingProps {
    className: string | null;
}

const FirebaseImageLoading = ({ className }: FirebaseImageLoadingProps) => (
    <Skeleton
        className={`c-Firebase-image-loading ${
            className ? `${className} ${className}--loading` : ""
        }`}
    />
);

export default FirebaseImageLoading;
