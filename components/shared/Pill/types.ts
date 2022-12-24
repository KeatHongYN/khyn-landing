import { PILL_VARIATION_ENUM } from "../../../config/enum";

export interface PillProps {
    text: string;
    iconID?: string;
    variation?: PILL_VARIATION_ENUM;
}
