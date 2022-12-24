import { ERROR_PAGE_ENUM } from "../../../config/enum";

export interface ErrorProps {
    statusCode?: number;
    type?: ERROR_PAGE_ENUM;
}
