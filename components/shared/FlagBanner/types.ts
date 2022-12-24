import { FLAG_BANNER_VARIATION_ENUM } from "../../../config/enum";

export interface FlagBannerProps {
    text: string;
    isMobile?: boolean;
    variation?: FLAG_BANNER_VARIATION_ENUM;
}
