import { Icon } from "@iconify/react";
import React from "react";

interface FirebaseImageErrorProps {
    className: string | null;
}

const FirebaseImageError = ({ className }: FirebaseImageErrorProps) => (
    <div
        className={`c-Firebase-image-error ${
            className ? `${className} ${className}--error` : ""
        }`}
    >
        <Icon className="c-Firebase-image-error__Icon" icon="carbon:no-image" />
        <p>Image load error.</p>
    </div>
);

export default FirebaseImageError;
