import Image from "next/image";
import { BTN_VARIATION_ENUM } from "../../../config/enum";
import ExternalLinkButton from "../../shared/Button/ExternalLinkButton";
import { JoinUsIGSingularType, JoinUsIGsProps } from "./types";

const JoinUsIG = ({
    id,
    imgFilePath,
    name,
    description,
    signUpLink,
    learnMoreLink
}: JoinUsIGSingularType): JSX.Element => {
    const hadEvenId = id % 2 === 0;

    return (
        <div
            className={`c-Join-us-ig c-Join-us-ig--${
                hadEvenId ? "even" : "odd"
            }`}
        >
            <div className="c-Join-us-ig__Details c-Details">
                <h1>{name}</h1>
                <p>{description}</p>
                <div className="c-Details__Btns c-Btns">
                    <ExternalLinkButton text="Sign up" href={signUpLink} />
                    <ExternalLinkButton
                        text="Learn more"
                        href={learnMoreLink}
                        variation={BTN_VARIATION_ENUM.PRIMARY_EMPTY}
                    />
                </div>
            </div>
            <div className="c-Join-us-ig__Img c-Img">
                <Image
                    width={200}
                    height={200}
                    src={imgFilePath}
                    alt="interest group"
                    unoptimized
                />
            </div>
        </div>
    );
};

const JoinUsIGs = ({ data }: JoinUsIGsProps): JSX.Element => {
    if (!data || !data.length) {
        return <p>No data.</p>;
    }

    return (
        <div className="c-Join-us-igs">
            {data.map((oneIG) => (
                <JoinUsIG key={oneIG.id} {...oneIG} />
            ))}
        </div>
    );
};

export default JoinUsIGs;
