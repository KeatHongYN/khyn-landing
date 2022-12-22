import React from "react";
import Button from "../../shared/Button";
import ExternalLinkButton from "../../shared/Button/ExternalLinkButton";
import { BTN_VARIATION_ENUM } from "../../../config/constants";
import MainLayout from "../../../layout/MainLayout";
import { useRouter } from "next/router";

const JoinUsPage = (): JSX.Element => {
    const router = useRouter();

    return (
        <MainLayout title="Join us - Keat Hong Youth Network">
            <div className="c-Join-us">
                {/* Hero */}
                <div className="c-Join-us__Hero c-Hero">
                    <h1>Join our Community</h1>
                    <p>
                        We engage the residents living in Keat Hong Constituency
                        as well as other beneficiaries. Members consist of
                        youths from all walks of life, between ages 15 - 35
                        years old. Sign up as a volunteer via the link below!
                    </p>
                    <div className="c-Hero__Btns c-Btns">
                        <ExternalLinkButton
                            text="Sign up"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeFxeOJYoBedxfsPpYWe_WSEk8yZYZ7iYb0dlFV7mbeqMzkUQ/viewform"
                        />
                        <Button
                            text="Frequently asked questions"
                            onClickFn={() =>
                                router.push("/about-us#about-us_faqs")
                            }
                            variation={BTN_VARIATION_ENUM.PRIMARY_EMPTY}
                        />
                    </div>
                </div>

                {/* Pictures */}
                <div className="c-Join-us__Pictures c-Pictures"></div>

                {/* Socials */}
                <div className="c-Join-us__Socials c-Socials">
                    <h1>
                        Stay updated. <br />
                        Follow our socials.
                    </h1>
                    <div className="c-Socials__Links"></div>
                </div>

                {/* Interest groups */}
                <div className="c-Join-us__IG c-IG">
                    <h1>Interest Groups</h1>
                    <div className="c-IG__List"></div>
                </div>
            </div>
        </MainLayout>
    );
};

export default JoinUsPage;
