import { TESTIMONIAL_BG_ENUM } from "../../../config/enum";

export interface SIGEventsBentoBoxProps {
    pictureFilePaths: {
        one: string;
        two: string;
        three: string;
        four: string;
    };
}

export interface TestimonialsProps {
    testimonialList: Array<{
        id: number;
        avatarFilePath: string;
        text: string;
        name: string;
        position: string;
        bgVariation: TESTIMONIAL_BG_ENUM;
    }>;
}
