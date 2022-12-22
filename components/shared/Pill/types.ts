import { PILL_VARIATION_ENUM } from "../../../config/constants";

export interface PillProps {
    text: string;
    iconID?: string;
    variation?: PILL_VARIATION_ENUM;
}
