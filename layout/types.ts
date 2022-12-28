interface OpenGraphInfoType {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
}

export interface SEOProps {
    title?: string;
    openGraph?: OpenGraphInfoType;
}

export interface MainLayoutProps {
    children?: any;
    maxBodyWidth?: boolean;
    title?: string;
    openGraph?: OpenGraphInfoType;
}

export interface HeaderProps {
    windowWidth: number | undefined;
}

export interface FooterProps {
    windowWidth: number | undefined;
}
