export interface JoinUsPictureBentoBoxProps {
    one: string;
    two: string;
    three: string;
    four: string;
}

export type SocialLinksListSingularType = {
    href: string;
    iconId: string;
    name: string;
};

export type SocialLinksListMultiType = Array<SocialLinksListSingularType>;

export type JoinUsSocialLinkProps = SocialLinksListSingularType;
