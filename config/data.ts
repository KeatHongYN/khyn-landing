import {
    KHYN_TELEGRAM_URL,
    KHYN_VOLUNTEER_SIGN_UP_FORM_URL
} from "./constants";
import { TESTIMONIAL_BG_ENUM } from "./enum";

export const FAQ_LIST = [
    {
        summary: "How do I join the YN as a volunteer?",
        details: `You may express to join us by indicating in this ${KHYN_VOLUNTEER_SIGN_UP_FORM_URL} Do follow us on Instagram or on our Telegram channel to stay abreast of the latest events, and sign up to volunteer in them whenever possible!`
    },
    {
        summary: "How do I join the interest groups of the YN?",
        details: `If you are interested in a particular interest group, you may express your interest to join in `
    },
    {
        summary: "How do I stay updated for all future events?",
        details: `Follow us on Instagram @keathongyouths and subscribe to our Telegram channel ${KHYN_TELEGRAM_URL}`
    },
    {
        summary: "I am keen to help plan a project. Where do I get started?",
        details:
            "You may contact any one of our YN members and he/she can follow up from there. It will be even better if you have a group of friends who are keen to do a project together!"
    },
    {
        summary: "Where does the YN get its funding from?",
        details:
            "The YN is under the umbrella of the PAYM, so we do receive some funding from the PA. We also have various partners which provide us with sponsorships and grants on an ad-hoc basis."
    },
    {
        summary:
            "I would like to collaborate with the YN. Who should I contact?",
        details: "Feel free to drop a DM to our Instagram or Facebook accounts."
    }
];

export const HOME_HERO_PIC_LIST = [
    {
        fileId: 1,
        filePath: "/assets/img/test-mw.png"
    },
    {
        fileId: 2,
        filePath: "/assets/img/test-1.png"
    },
    {
        fileId: 3,
        filePath: "/assets/img/test-2.png"
    }
];

export const HOME_SIG_EVENTS_LIST = [
    // content is derived in the page itself.
    {
        id: 1,
        heading: "Halloween",
        pictureFilePaths: {
            one: "/assets/img/test-1.png", // number determines the position of the picture
            two: "/assets/img/test-2.png",
            three: "/assets/img/test-3.png",
            four: "/assets/img/test-4.png"
        }
    },
    {
        id: 2,
        heading: "Children Education Tours",
        pictureFilePaths: {
            one: "/assets/img/test-1.png",
            two: "/assets/img/test-2.png",
            three: "/assets/img/test-4.png",
            four: "/assets/img/test-3.png"
        }
    },
    {
        id: 3,
        heading: "Migrant Workers Carnival",
        pictureFilePaths: {
            one: "/assets/img/test-1.png",
            two: "/assets/img/test-2.png",
            three: "/assets/img/test-3.png",
            four: "/assets/img/test-4.png"
        }
    },
    {
        id: 4,
        heading: "Youth Dialogue",
        pictureFilePaths: {
            one: "/assets/img/test-1.png",
            two: "/assets/img/test-2.png",
            three: "/assets/img/test-4.png",
            four: "/assets/img/test-3.png"
        }
    },
    {
        id: 5,
        heading: "Keat Hong Recycles",
        pictureFilePaths: {
            one: "/assets/img/test-1.png",
            two: "/assets/img/test-2.png",
            three: "/assets/img/test-3.png",
            four: "/assets/img/test-4.png"
        }
    }
];

export const HOME_TESTIMONIAL_LIST = [
    {
        id: 1,
        avatarFilePath: "/assets/img/weipin.png",
        text: "Joining the YN has been very humbling and empowering. I got to make friends from diverse backgrounds, grow my skillsets, and benefit my community!",
        name: "Teo Wei Pin",
        position: "Student, Nanyang Technological University",
        bgVariation: TESTIMONIAL_BG_ENUM.PURPLE
    },
    {
        id: 2,
        avatarFilePath: "/assets/img/weipin.png",
        text: "Joining the YN has brought me closer to the community! From ideating and executing various events that bring fun to everyone, just like in the Halloween carnival of 2022!",
        name: "Estrella Kwok",
        position: "Student, Singapore Polytechnic",
        bgVariation: TESTIMONIAL_BG_ENUM.RADISH
    },
    {
        id: 3,
        avatarFilePath: "/assets/img/weipin.png",
        text: "Joining the YN has opened many new doors for me! I got to try things I never thought possible, even being part of the musical “Lost in Choa Chu Kang” for Countdown 2022!",
        name: "Jamie Wu",
        position: "Student, University of Melbourne",
        bgVariation: TESTIMONIAL_BG_ENUM.BLUE
    }
];
