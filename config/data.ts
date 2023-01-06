import {
    KHYN_FACEBOOK_URL,
    KHYN_INSTAGRAM_URL,
    KHYN_TELEGRAM_URL,
    KHYN_VOLUNTEER_SIGN_UP_FORM_URL,
    LANDING_PAGE_BASE_URL
} from "./constants";
import { TESTIMONIAL_BG_ENUM } from "./enum";

export const FAQ_LIST = [
    {
        summary: "How do I join the YN as a volunteer?",
        details: `You may express to join us by indicating in this ${KHYN_VOLUNTEER_SIGN_UP_FORM_URL} Do follow us on our Instagram and Telegram channel to stay abreast of the latest events, and sign up to volunteer in them whenever possible!`
    },
    {
        summary: "How do I join the interest groups of the YN?",
        details: `If you are interested in a particular interest group, you may express your interest to join ${`${LANDING_PAGE_BASE_URL}/join-us#join-us_igs`}`
    },
    {
        summary: "How do I stay updated for all future events?",
        details: `Follow us on ${KHYN_INSTAGRAM_URL} and subscribe to our ${KHYN_TELEGRAM_URL}`
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
        details: `Feel free to drop a DM to our ${KHYN_INSTAGRAM_URL} or ${KHYN_FACEBOOK_URL} page.`
    }
];

export const HOME_HERO_PIC_LIST = [
    {
        fileId: 1,
        filePath: "/assets/img/home/home-carousel-1.jpg"
    },
    {
        fileId: 2,
        filePath: "/assets/img/home/home-carousel-2.jpg"
    },
    {
        fileId: 3,
        filePath: "/assets/img/home/home-carousel-3.jpg"
    }
];

export const HOME_SIG_EVENTS_LIST = [
    // content is derived in the page itself.
    {
        id: 1,
        heading: "Halloween",
        pictureFilePaths: {
            one: "/assets/img/home/home-sig-halloween-1.jpg", // number determines the position of the picture
            two: "/assets/img/home/home-sig-halloween-2.jpeg",
            three: "/assets/img/home/home-sig-halloween-3.jpg",
            four: "/assets/img/home/home-sig-halloween-4.jpg"
        }
    },
    {
        id: 2,
        heading: "Children Education Tours",
        pictureFilePaths: {
            one: "/assets/img/home/home-sig-cet-1.JPG",
            two: "/assets/img/home/home-sig-cet-2.JPG",
            three: "/assets/img/home/home-sig-cet-3.JPG",
            four: "/assets/img/home/home-sig-cet-4.jpeg"
        }
    },
    {
        id: 3,
        heading: "Migrant Workers Carnival",
        pictureFilePaths: {
            one: "/assets/img/home/home-sig-mw-1.JPG", // number determines the position of the picture
            two: "/assets/img/home/home-sig-mw-2.JPG",
            three: "/assets/img/home/home-sig-mw-3.JPG",
            four: "/assets/img/home/home-sig-mw-4.JPG"
        }
    },
    {
        id: 4,
        heading: "Youth Dialogue",
        pictureFilePaths: {
            one: "/assets/img/home/home-sig-yd-1.JPG",
            two: "/assets/img/home/home-sig-yd-2.jpg",
            three: "/assets/img/home/home-sig-yd-3.JPEG",
            four: "/assets/img/home/home-sig-yd-4.JPG"
        }
    }
    // {
    //     id: 5,
    //     heading: "Keat Hong Recycles",
    //     pictureFilePaths: {
    //         one: "/assets/img/home/home-sig-yd-1.JPG",
    //         two: "/assets/img/home/home-sig-yd-2.jpg",
    //         three: "/assets/img/home/home-sig-yd-3.JPEG",
    //         four: "/assets/img/home/home-sig-yd-4.JPG"
    //     }
    // }
];

export const HOME_TESTIMONIAL_LIST = [
    {
        id: 1,
        avatarFilePath: "/assets/img/avatar/avatar-weipin.jpeg",
        text: "Joining the YN has been very humbling and empowering. I got to make friends from diverse backgrounds, grow my skillsets, and benefit my community!",
        name: "Teo Wei Pin",
        position: "Student, Nanyang Technological University",
        bgVariation: TESTIMONIAL_BG_ENUM.PURPLE
    },
    {
        id: 2,
        avatarFilePath: "/assets/img/avatar/avatar-estrella.jpeg",
        text: "Joining the YN has brought me closer to the community! From ideating and executing various events that bring fun to everyone, just like in the Halloween carnival of 2022!",
        name: "Estrella Kwok",
        position: "Student, Singapore Polytechnic",
        bgVariation: TESTIMONIAL_BG_ENUM.RADISH
    },
    {
        id: 3,
        avatarFilePath: "/assets/img/avatar/avatar-jamie.jpeg",
        text: "Joining the YN has opened many new doors for me! I got to try things I never thought possible, even being part of the musical “Lost in Choa Chu Kang” for Countdown 2022!",
        name: "Jamie Wu",
        position: "Student, University of Melbourne",
        bgVariation: TESTIMONIAL_BG_ENUM.BLUE
    }
];

export const JOIN_US_PICTURE_LIST = {
    one: "/assets/img/join-us/join-us-bento-1.jpg", // number determines the position of the picture
    two: "/assets/img/join-us/join-us-bento-2.jpeg",
    three: "/assets/img/join-us/join-us-bento-3.jpeg",
    four: "/assets/img/join-us/join-us-bento-4.jpg"
};

export const JOIN_US_IG_LIST = [
    {
        id: 1,
        imgFilePath: "/assets/img/join-us/join-us-ig-gic.jpeg",
        name: "Group to Initiate Change",
        description:
            "Established in 2011, Group to Initiate Change (GIC) is the YN’s Community Service Interest Group. The group hopes to provide relevant assistance to needy residents in the constituency, and have been active in organising home visits, house makeovers and grocery distributions. GIC also conducts talks and trainings for their members to help develop skills and knowledge that will enable them to help their beneficiaries effectively. In the long term, they envision to improve each beneficiary’s well-being and socio-economic conditions.",
        signUpLink: KHYN_INSTAGRAM_URL,
        learnMoreLink: KHYN_INSTAGRAM_URL
    },
    {
        id: 2,
        imgFilePath: "/assets/img/join-us/join-us-ig-music-box.jpeg",
        name: "MusicBox Interest Group",
        description:
            "The group was formed to engage youths who have talent in performing, be it singing, dancing, playing musical instruments or acting. Members have been regularly invited to perform at community events, such as the New Year Countdown and Mid-Autumn Festival.",
        signUpLink: KHYN_INSTAGRAM_URL,
        learnMoreLink: KHYN_INSTAGRAM_URL
    },
    {
        id: 3,
        imgFilePath: "/assets/img/join-us/join-us-ig-a2g.jpeg",
        name: "The A2G Group",
        description:
            "The “Aspire to Bring Cheer and Delight through Engaging our Future Generation (ABCDEFG or A2G)” group was formed in 2013, after the success of the Children Educational Tours (CETs). The group brings volunteers who enjoy working with children together to organise exciting activities for them, and have also started holding Children’s Art Sunday and children workshops. Looking forward, A2G hopes to promote family bonding by increasing parents’ involvement in their children’s activities.",
        signUpLink: KHYN_INSTAGRAM_URL,
        learnMoreLink: KHYN_INSTAGRAM_URL
    }
];

export const ABOUT_US_CORE_DOMAINS_LIST = [
    {
        id: 1,
        name: "Environment & Sustainability",
        imgFilePath: "/assets/img/about-us/about-us-bento-health.jpeg"
    },
    {
        id: 2,
        name: "Sports & Adventure",
        imgFilePath: "/assets/img/about-us/about-us-bento-health.jpeg"
    },
    {
        id: 3,
        name: "Arts & Culture",
        imgFilePath: "/assets/img/about-us/about-us-bento-health.jpeg"
    },
    {
        id: 4,
        name: "Health & Wellness",
        imgFilePath: "/assets/img/about-us/about-us-bento-health.jpeg"
    },
    {
        id: 5,
        name: "Community Service",
        imgFilePath: "/assets/img/about-us/about-us-bento-cs.jpeg"
    },
    {
        id: 6,
        name: "Children & Family",
        imgFilePath: "/assets/img/about-us/about-us-bento-cf.jpg"
    }
];
