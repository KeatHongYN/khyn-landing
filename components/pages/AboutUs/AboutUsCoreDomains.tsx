import Image from "next/image";
import { ABOUT_US_CORE_DOMAINS_LIST } from "../../../config/data";

const AboutUsCoreDomains = (): JSX.Element => (
    <div className="c-About-us-core-domains">
        {ABOUT_US_CORE_DOMAINS_LIST.map((oneCoreDomain) => (
            <div
                key={oneCoreDomain.id}
                className="c-About-us-core-domains__Item c-Item"
            >
                <Image
                    src={oneCoreDomain.imgFilePath}
                    width={200}
                    height={100}
                    alt="image"
                />
                <div className="c-Item__Details c-Details">
                    <h1>{oneCoreDomain.name}</h1>
                </div>
            </div>
        ))}
    </div>
);

export default AboutUsCoreDomains;
