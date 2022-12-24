import Image from "next/image";
import { SIGEventsBentoBoxProps } from "./types";

const SIGEventsBentoBox = ({
    pictureList
}: SIGEventsBentoBoxProps): JSX.Element => (
    <div className="c-SIG-events-bento-box">
        <Image
            className="c-SIG-events-bento-box__One"
            src={pictureList.one}
            width={300}
            height={300}
            alt="picture"
        />
        <Image
            className="c-SIG-events-bento-box__Two"
            src={pictureList.two}
            width={300}
            height={300}
            alt="picture"
        />
        <Image
            className="c-SIG-events-bento-box__Three"
            src={pictureList.three}
            width={100}
            height={100}
            alt="picture"
        />
        <Image
            className="c-SIG-events-bento-box__Four"
            src={pictureList.four}
            width={100}
            height={100}
            alt="picture"
        />
    </div>
);

export default SIGEventsBentoBox;
