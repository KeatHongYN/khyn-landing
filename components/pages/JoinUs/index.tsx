import React from "react";
import { useRouter } from "next/router";
import Button from "../../shared/Button";
import ExternalLinkButton from "../../shared/Button/ExternalLinkButton";
import { BTN_VARIATION_ENUM } from "../../../config/enum";
import MainLayout from "../../../layout/MainLayout";
import { KHYN_VOLUNTEER_SIGN_UP_FORM_URL } from "../../../config/constants";
import JoinUsPictureBentoBox from "./JoinUsBentoBox";
import { JOIN_US_IG_LIST, JOIN_US_PICTURE_LIST } from "../../../config/data";
import JoinUsSocialLinks from "./JoinUsSocialLinks";
import JoinUsIGs from "./JoinUsIGs";

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
                            href={KHYN_VOLUNTEER_SIGN_UP_FORM_URL}
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
                <div className="c-Join-us__Pictures c-Pictures">
                    <JoinUsPictureBentoBox {...JOIN_US_PICTURE_LIST} />
                    <p className="c-Pictures__Caption">
                        View more photos on our socials
                    </p>
                </div>

                {/* Socials */}
                <div className="c-Join-us__Socials c-Socials">
                    <h1>
                        Stay updated. <br />
                        Follow our socials.
                    </h1>
                    <JoinUsSocialLinks />
                </div>

                {/* Interest groups */}
                <div className="c-Join-us__IG c-IG" id="join-us_igs">
                    <h1>Interest Groups</h1>
                    <JoinUsIGs data={JOIN_US_IG_LIST} />
                </div>
            </div>
        </MainLayout>
    );
};

export default JoinUsPage;
