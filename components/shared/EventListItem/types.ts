export interface EventListItemProps {
    eventId: string,
    title: string,
    location: string,
    date: string | null,
    time: string | null,
    volunteersNeeded: boolean,
    image: string | null,
    price: string | null | undefined
}