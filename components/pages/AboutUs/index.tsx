import Image from "next/image";
import React from "react";
import MainLayout from "../../../layout/MainLayout";
import ImgBPGH from "../../../public/assets/img/partner-bpgh.png";
import ImgJPJC from "../../../public/assets/img/partner-jpjc.png";
import Accordion from "../../shared/Accordion";
import {
    KHYN_FACEBOOK_URL,
    KHYN_INSTAGRAM_URL,
    KHYN_TELEGRAM_URL,
    KHYN_VOLUNTEER_SIGN_UP_FORM_URL,
    LANDING_PAGE_BASE_URL
} from "../../../config/constants";
import { FAQ_LIST } from "../../../config/data";
import AboutUsCoreDomains from "./AboutUsCoreDomains";

function AboutUsPage(): JSX.Element {
    return (
        <MainLayout title="About us - Keat Hong Youth Network" maxBodyWidth>
            <div className="c-About-us">
                {/* Hero */}
                <div className="c-About-us__Hero c-Hero">
                    <h1>We Enrich the Lives of Others.</h1>
                    <p>
                        Since 1998, Keat Hong Youth Network (YN) has been
                        serving residents living in the Keat Hong Constituency
                        as well as other beneficiaries. Members consist of
                        youths from all walks of life, between ages 15-35 years
                        old. Our vision is to build social capital amongst
                        youths, and through youths to help enrich the lives of
                        others.
                    </p>
                </div>

                {/* Core domains */}
                <div className="c-About-us__CD c-CD">
                    <div className="c-CD__Top c-Top">
                        <h1>Core Domains</h1>
                        <p>
                            Keat Hong YN strives to meet the diverse interests
                            of youths, through an array of events and projects.
                            Our youths have been especially active in these
                            domains.
                        </p>
                    </div>
                    <AboutUsCoreDomains />
                </div>

                {/* Partners */}
                <div className="c-About-us__Partners c-Partners">
                    <h1>Our Partners</h1>
                    <div className="c-Partners__Img-list c-Img-list">
                        <Image src={ImgBPGH} alt="BPGH" />
                        <Image src={ImgJPJC} alt="JPJC" />
                    </div>
                </div>

                {/* FAQs */}
                <div className="c-About-us__FAQs c-FAQs" id="about-us_faqs">
                    <h1 className="c-FAQs__Header">
                        Frequently Asked Questions
                    </h1>
                    <Accordion
                        contents={FAQ_LIST}
                        linkMap={{
                            [KHYN_VOLUNTEER_SIGN_UP_FORM_URL]: "sign up form.",
                            [KHYN_TELEGRAM_URL]: "Telegram",
                            [KHYN_INSTAGRAM_URL]: "Instagram",
                            [KHYN_FACEBOOK_URL]: "Facebook",
                            [`${LANDING_PAGE_BASE_URL}/join-us#join-us_igs`]:
                                "here"
                        }}
                    />
                </div>
            </div>
        </MainLayout>
    );
}

export default AboutUsPage;
