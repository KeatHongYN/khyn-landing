import { BTN_VARIATION_ENUM } from "../../../config/enum";

export interface ButtonProps {
    disabled?: boolean;
    text: string;
    iconID?: string;
    variation?: BTN_VARIATION_ENUM;
    arrow?: boolean;
    onClickFn?: () => any;
}

export interface ExternalLinkButtonProps {
    text: string;
    href: string;
    disabled?: boolean;
    variation?: BTN_VARIATION_ENUM;
    className?: string;
    showIcon?: boolean;
}
