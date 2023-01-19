import { Icon } from "@iconify/react";
import { BTN_META, BTN_VARIATION_ENUM } from "../../../config/enum";
import { ExternalLinkButtonProps } from "./types";

const ExternalLinkButton = ({
    text,
    href,
    disabled = false,
    variation = BTN_VARIATION_ENUM.PRIMARY,
    className = "",
    showIcon = true,
    handleOnClick = null
}: ExternalLinkButtonProps): JSX.Element => {
    const { classSuffix } = BTN_META[variation];

    return (
        <a
            {...(disabled ? null : { href })}
            target="_blank"
            rel="noopener noreferrer"
            className={`c-External-link-btn c-External-link-btn__${classSuffix} ${className} ${
                disabled ? "c-External-link-btn--disabled" : ""
            }`}
            onClick={() => handleOnClick && handleOnClick()}
        >
            {text}
            {showIcon && (
                <Icon
                    className="c-External-link-btn__Icon"
                    icon="bx:link-external"
                />
            )}
        </a>
    );
};

export default ExternalLinkButton;
