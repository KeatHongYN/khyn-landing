import EventListItem from "../../shared/EventListItem";
import NotFound from "../../shared/Error/NotFound";
import { EventListProps } from "./types";

const EventList = ({ events }: EventListProps): JSX.Element => (
    <>
        {events && events.length ? (
            events.map((event, index) => (
                <span key={`event-${index}`}>
                    <EventListItem {...event} />
                    {index !== events.length - 1 ? (
                        <hr className="c-List__HR c-HR" />
                    ) : null}
                </span>
            ))
        ) : (
            <NotFound />
        )}
    </>
);

export default EventList;
