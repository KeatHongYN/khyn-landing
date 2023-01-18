import Image from "next/image";
import React, { useState, useEffect } from "react";
import firebaseFn from "../../../utils/firebase";
import { APIFormatState } from "../../../utils/types";
import FirebaseImageError from "./FirebaseImageError";
import FirebaseImageLoading from "./FirebaseImageLoading";
import { FirebaseImageProps } from "./types";

const FirebaseImage = ({
    filePath,
    className = null,
    otherImageProps
}: FirebaseImageProps) => {
    const [getEventResult, setGetEventResult] = useState<APIFormatState>({
        success: false,
        data: null,
        errorType: null,
        loading: true
    });

    useEffect(() => {
        (async () => {
            if (filePath) {
                const [success, data, errorType] =
                    await firebaseFn.getFileFromStorage(filePath);
                setGetEventResult({
                    success,
                    data,
                    errorType,
                    loading: false
                });
            }
        })();
    }, []);

    if (filePath && getEventResult.loading) {
        return <FirebaseImageLoading className={className} />;
    }

    if (!getEventResult.success) {
        return <FirebaseImageError className={className} />;
    }

    return (
        <Image
            className={className || ""}
            src={getEventResult.data.downloadURL}
            {...otherImageProps}
        />
    );
};

export default FirebaseImage;
