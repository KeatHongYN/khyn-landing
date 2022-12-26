import EventsPage from "../../components/pages/Events";
import firebaseFn from "../../utils/firebase";

export default EventsPage;

export async function getServerSideProps() {
    const [success, data, errorType] = await firebaseFn.getEvents();

    return {
        props: {
            getEventsResult: {
                success,
                data,
                errorType
            }
        }
    };
}
