import { ERROR_PAGE_ENUM } from "../../../config/constants";

export interface ErrorProps {
    statusCode?: number;
    type?: ERROR_PAGE_ENUM;
}
