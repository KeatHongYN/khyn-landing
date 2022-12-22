export interface TitleProps {
    title?: string;
}

export interface MainLayoutProps {
    children?: any;
    maxBodyWidth?: boolean;
    title?: string;
}

export interface HeaderProps {
    windowWidth: number | undefined;
}

export interface FooterProps {
    windowWidth: number | undefined;
}
