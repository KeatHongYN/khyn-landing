import { ERROR_ENUM } from "../../../../config/error";
import { SingularEvent } from "../types";

export interface ViewEventPageProps {
    getEventResult: {
        success: boolean;
        data: SingularEvent;
        errorType: ERROR_ENUM | null;
    };
}

export type ViewEventProps = SingularEvent;
