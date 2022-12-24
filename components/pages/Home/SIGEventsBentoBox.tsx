import Image from "next/image";
import { SIGEventsBentoBoxProps } from "./types";

const SIGEventsBentoBox = ({
    pictureFilePaths
}: SIGEventsBentoBoxProps): JSX.Element => (
    <div className="c-SIG-events-bento-box">
        <Image
            className="c-SIG-events-bento-box__One"
            src={pictureFilePaths.one}
            width={300}
            height={300}
            alt="picture"
        />
        <Image
            className="c-SIG-events-bento-box__Two"
            src={pictureFilePaths.two}
            width={300}
            height={300}
            alt="picture"
        />
        <Image
            className="c-SIG-events-bento-box__Three"
            src={pictureFilePaths.three}
            width={100}
            height={100}
            alt="picture"
        />
        <Image
            className="c-SIG-events-bento-box__Four"
            src={pictureFilePaths.four}
            width={100}
            height={100}
            alt="picture"
        />
    </div>
);

export default SIGEventsBentoBox;
