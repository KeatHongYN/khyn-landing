import { MOCK_EVENTS } from "../../../config/mock";
import EventListItemSkeleton from "../../shared/EventListItem/EventListItemSkeleton";

const EventListSkeleton = (): JSX.Element => (
    <>
        {MOCK_EVENTS.map((event, index) => (
            <span key={`mock-event-${index}`}>
                <EventListItemSkeleton />
                {index !== MOCK_EVENTS.length - 1 ? (
                    <hr className="c-List__HR c-HR" />
                ) : null}
            </span>
        ))}
    </>
);

export default EventListSkeleton;
