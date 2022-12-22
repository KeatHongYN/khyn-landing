import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import LogoKHYN from "../../assets/svg/logo-khyn.svg";
import LogoStatus from "../../assets/svg/logo-status.svg";
import ExternalLinkButton from "../../components/shared/Button/ExternalLinkButton";
import { BTN_VARIATION_ENUM, VERSION_NO } from "../../config/constants";

const FooterMobile = (): JSX.Element => (
    <div className="c-Footer-mobile">
        <div className="c-Footer-mobile__Top c-Top">
            <div className="c-Top__Left c-Left">
                <Link className="c-Left__Logo" href="/">
                    <LogoKHYN />
                </Link>
                <div className="c-Left__Status c-Status">
                    <LogoStatus />
                    <ExternalLinkButton
                        text="All Systems Operational."
                        className="c-Status__Link"
                        href="https://keathongyouths.betteruptime.com"
                        showIcon={false}
                        variation={BTN_VARIATION_ENUM.KOSONG}
                    />
                </div>
            </div>
            <div className="c-Top__Links c-Links">
                <div className="c-Links__Column c-Column">
                    <h1>Explore</h1>
                    <div className="c-Column__List c-List">
                        <ExternalLinkButton
                            text="Keat Hong Recycles"
                            href="https://keat-hong-recycles.web.app"
                            variation={BTN_VARIATION_ENUM.KOSONG}
                            className="c-List__Anchor"
                            showIcon={false}
                        />
                    </div>
                </div>
                <div className="c-Links__Column c-Column">
                    <h1>Developers</h1>
                    <div className="c-Column__List c-List">
                        <ExternalLinkButton
                            text="Report Issue"
                            href="https://github.com/KeatHongYN"
                            variation={BTN_VARIATION_ENUM.KOSONG}
                            className="c-List__Anchor"
                            showIcon={false}
                        />
                        <ExternalLinkButton
                            text="Contribute"
                            href="https://github.com/KeatHongYN"
                            variation={BTN_VARIATION_ENUM.KOSONG}
                            className="c-List__Anchor"
                            showIcon={false}
                        />
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="c-Footer-desktop__Bottom c-Bottom">
            <div className="c-Bottom__Copyright">
                <p>
                    Copyright &#169; 2022 Keat Hong Youth Network. All Rights
                    Reserved.
                </p>
            </div>
            <div className="c-Bottom__Socials c-Socials">
                <a
                    className="c-Socials__Link c-Link"
                    href="https://t.me/+8d9R8Ts6UiZjYWM0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon
                        className="c-Link__Icon c-Icon"
                        icon="akar-icons:telegram-fill"
                    />
                </a>
                <a
                    className="c-Socials__Link c-Link"
                    href="https://www.instagram.com/keathongyouths"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon
                        className="c-Link__Icon c-Icon"
                        icon="akar-icons:instagram-fill"
                    />
                </a>
                <a
                    className="c-Socials__Link c-Link"
                    href="https://www.facebook.com/KeatHongYouths"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon
                        className="c-Link__Icon c-Icon"
                        icon="akar-icons:facebook-fill"
                    />
                </a>
                <a
                    className="c-Socials__Link c-Link"
                    href="https://github.com/KeatHongYN"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon
                        className="c-Link__Icon c-Icon"
                        icon="akar-icons:github-fill"
                    />
                </a>
            </div>
        </div>
        <div className="c-Footer-desktop__Version c-Version">
            <Link className="c-Version__Link" href="/release-notes">
                Version: {VERSION_NO}
            </Link>
        </div>
    </div>
);

export default FooterMobile;
