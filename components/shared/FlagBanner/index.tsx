import React from "react";
import {
    FLAG_BANNER_META,
    FLAG_BANNER_VARIATION_ENUM
} from "../../../config/enum";
import { FlagBannerProps } from "./types";

function FlagBanner({
    text,
    isMobile = false,
    variation = FLAG_BANNER_VARIATION_ENUM.DEV
}: FlagBannerProps): JSX.Element {
    const { classSuffix } = FLAG_BANNER_META[variation];

    return (
        <div
            className={`c-Flag-banner c-Flag-banner__${classSuffix} ${
                isMobile ? "c-Flag-banner--mobile" : ""
            }`}
        >
            <span className="c-Flag-banner__Line c-Line"></span>
            <span className="c-Flag-banner__Text-box c-Text-box">
                <p>{text}</p>
            </span>
        </div>
    );
}

export default FlagBanner;
