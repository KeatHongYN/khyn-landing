import { GetServerSidePropsContext } from "next";
import ViewEventPage from "../../components/pages/Events/ViewEvent";
import { ERROR_ENUM } from "../../config/error";
import firebaseFn from "../../utils/firebase";

export default ViewEventPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { eventId } = context.query;
    let [success, data, errorType] = [
        false,
        null,
        ERROR_ENUM.FIREBASE_INVALID_EVENT_ID
    ];
    if (eventId) {
        [success, data, errorType] = await firebaseFn.getEvent(
            eventId as string
        );
    }

    return {
        props: {
            getEventResult: {
                success,
                data,
                errorType
            }
        }
    };
}
