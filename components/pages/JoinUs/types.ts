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

export type JoinUsIGSingularType = {
    id: number;
    imgFilePath: string;
    name: string;
    description: string;
    signUpLink: string;
    learnMoreLink: string;
};

export interface JoinUsIGsProps {
    data: Array<JoinUsIGSingularType>;
}
