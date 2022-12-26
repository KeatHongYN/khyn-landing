import { Icon } from "@iconify/react";

const NotFound = () => (
    <div className="c-Not-found">
        <span className="c-Not-found__Icon-container">
            <Icon className="c-Not-found__Icon" icon="fe:search" />
        </span>
        <h1>No results.</h1>
        <p>There aren&apos;t any results for this query.</p>
    </div>
);

export default NotFound;
