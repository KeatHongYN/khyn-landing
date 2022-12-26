import { Icon } from "@iconify/react";
import { ErrorProps } from "./types";

const Error = ({ message }: ErrorProps): JSX.Element => (
    <div className="c-Error">
        <span className="c-Error__Icon-container">
            <Icon className="c-Error__Icon" icon="bxs:error" />
        </span>
        <h1>{message || "Something went wrong."}</h1>
        <p>Something went wrong, try again later.</p>
    </div>
);

export default Error;
