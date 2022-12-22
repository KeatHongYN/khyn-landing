import { FLAG_BANNER_VARIATION_ENUM } from "../../../config/constants";

export interface FlagBannerProps {
    text: string;
    isMobile?: boolean;
    variation?: FLAG_BANNER_VARIATION_ENUM;
}
