import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";
import LogoKHYN from "../../public/assets/svg/logo-khyn.svg";
import LogoStatus from "../../public/assets/svg/logo-status.svg";
import ExternalLinkButton from "../../components/shared/Button/ExternalLinkButton";
import {
    KHYN_BETTERUPTIME_URL,
    KHYN_FACEBOOK_URL,
    KHYN_GITHUB_URL,
    KHYN_INSTAGRAM_URL,
    KHYN_KHR_URL,
    KHYN_LINKTREE_URL,
    KHYN_TELEGRAM_URL,
    VERSION
} from "../../config/constants";
import { BTN_VARIATION_ENUM } from "../../config/enum";

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
                        href={KHYN_BETTERUPTIME_URL}
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
                            href={KHYN_KHR_URL}
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
                        <Link className="c-List__Anchor" href="/sitemap">
                            Sitemap
                        </Link>
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
                <Tooltip title="Telegram" arrow placement="top">
                    <a
                        className="c-Socials__Link c-Link"
                        href={KHYN_TELEGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon
                            className="c-Link__Icon c-Icon"
                            icon="akar-icons:telegram-fill"
                        />
                    </a>
                </Tooltip>
                <Tooltip title="Instagram" arrow placement="top">
                    <a
                        className="c-Socials__Link c-Link"
                        href={KHYN_INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon
                            className="c-Link__Icon c-Icon"
                            icon="akar-icons:instagram-fill"
                        />
                    </a>
                </Tooltip>
                <Tooltip title="Facebook" arrow placement="top">
                    <a
                        className="c-Socials__Link c-Link"
                        href={KHYN_FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon
                            className="c-Link__Icon c-Icon"
                            icon="akar-icons:facebook-fill"
                        />
                    </a>
                </Tooltip>
                <Tooltip title="GitHub" arrow placement="top">
                    <a
                        className="c-Socials__Link c-Link"
                        href={KHYN_GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon
                            className="c-Link__Icon c-Icon"
                            icon="akar-icons:github-fill"
                        />
                    </a>
                </Tooltip>
                <Tooltip title="Linktree" arrow placement="top">
                    <a
                        className="c-Socials__Link c-Link"
                        href={KHYN_LINKTREE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon
                            className="c-Link__Icon c-Icon"
                            icon="simple-icons:linktree"
                        />
                    </a>
                </Tooltip>
            </div>
        </div>
        <div className="c-Footer-desktop__Version c-Version">
            <Link className="c-Version__Link" href="/release-notes">
                {VERSION}
            </Link>
        </div>
    </div>
);

export default FooterMobile;
