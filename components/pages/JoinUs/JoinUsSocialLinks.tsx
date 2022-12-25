import { Icon } from "@iconify/react";
import {
    KHYN_FACEBOOK_URL,
    KHYN_GITHUB_URL,
    KHYN_INSTAGRAM_URL,
    KHYN_LINKTREE_URL,
    KHYN_TELEGRAM_URL
} from "../../../config/constants";
import {
    JoinUsSocialLinkProps,
    SocialLinksListMultiType,
    SocialLinksListSingularType
} from "./types";

const JoinUsSocialLink = ({ href, iconId, name }: JoinUsSocialLinkProps) => (
    <a
        className="c-Join-us-social-links__Link c-Link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
    >
        <Icon className="c-Link__Icon c-Icon" icon={iconId} />
        <div className="c-Link__Text">
            <p>{name}</p>
            <Icon className="c-Text__Icon" icon="bx:link-external" />
        </div>
    </a>
);

const JoinUsSocialLinks = () => {
    const SOCIAL_LINKS_LIST: SocialLinksListMultiType = [
        {
            href: KHYN_TELEGRAM_URL,
            iconId: "akar-icons:telegram-fill",
            name: "Telegram"
        },
        {
            href: KHYN_INSTAGRAM_URL,
            iconId: "akar-icons:instagram-fill",
            name: "Instagram"
        },
        {
            href: KHYN_FACEBOOK_URL,
            iconId: "akar-icons:facebook-fill",
            name: "Facebook"
        },
        {
            href: KHYN_GITHUB_URL,
            iconId: "akar-icons:github-fill",
            name: "GitHub"
        },
        {
            href: KHYN_LINKTREE_URL,
            iconId: "simple-icons:linktree",
            name: "Linktree"
        }
    ];

    return (
        <div className="c-Join-us-social-links">
            {SOCIAL_LINKS_LIST.map(
                (oneSocialLink: SocialLinksListSingularType) => (
                    <JoinUsSocialLink
                        href={oneSocialLink.href}
                        iconId={oneSocialLink.iconId}
                        name={oneSocialLink.name}
                        key={`social-link-${oneSocialLink.iconId}`}
                    />
                )
            )}
        </div>
    );
};

export default JoinUsSocialLinks;
