export const MOCK_EVENTS = [
    {
        id: "this-is-a-fake-uuid-1",
        title: "One date, multiple time slot",
        description: "This is a fake description of condordia",
        location: "Keat Hong CC, Level 1, Lam Soon Auditorium",
        date: {
            start: 1620834079,
            end: null
        },
        time: {
            // 24 hr format
            start: {
                hour: 5,
                minute: 30
            },
            end: {
                hour: null,
                minute: null
            }
        },
        volunteers_needed: true,
        image: "https://picsum.photos/seed/picsum/200/200",
        price: 399.9,
        multiple_price: false
    },
    {
        id: "this-is-a-fake-uuid-2",
        title: "Multiple dates, no timeslot",
        description: "This is a fake description of condordia",
        location: "Keat Hong CC, Level 1, Lam Soon Auditorium",
        date: {
            start: 1620834079,
            end: 1667834635
        },
        time: {
            // 24 hr format
            start: {
                hour: null,
                minute: null
            },
            end: {
                hour: null,
                minute: null
            }
        },
        volunteers_needed: true,
        image: null,
        price: 399.9,
        multiple_price: true
    }
];
