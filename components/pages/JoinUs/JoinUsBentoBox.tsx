import Image from "next/image";
import { JoinUsPictureBentoBoxProps } from "./types";

const JoinUsPictureBentoBox = ({
    one,
    two,
    three,
    four
}: JoinUsPictureBentoBoxProps): JSX.Element => (
    <div className="c-Join-us-picture-bento-box">
        <Image
            className="c-Join-us-picture-bento-box__One"
            src={one}
            width={100}
            height={100}
            alt="picture"
            unoptimized
        />
        <Image
            className="c-Join-us-picture-bento-box__Two"
            src={two}
            width={100}
            height={100}
            alt="picture"
            unoptimized
        />
        <Image
            className="c-Join-us-picture-bento-box__Three"
            src={three}
            width={100}
            height={100}
            alt="picture"
            unoptimized
        />
        <Image
            className="c-Join-us-picture-bento-box__Four"
            src={four}
            width={100}
            height={100}
            alt="picture"
            unoptimized
        />
    </div>
);

export default JoinUsPictureBentoBox;
