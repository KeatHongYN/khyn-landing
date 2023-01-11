import { ERROR_ENUM } from "../../../config/error";

export interface ErrorProps {
    statusCode?: number;
    type?: ERROR_ENUM;
}
