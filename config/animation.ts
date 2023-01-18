export const slideFromLeftAni = {
    offscreen: {
        x: -10,
        opacity: 0
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        },
        opacity: 1
    }
};

export const slideFromRightAni = {
    offscreen: {
        x: 10,
        opacity: 0
    },

    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        },
        opacity: 1
    }
};

export const slideFromBottomAni = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 1 }
    }
};
