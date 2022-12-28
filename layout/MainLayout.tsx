import { useRouter } from "next/router";
import React, { useState } from "react";
import { PROD_HOST } from "../config/constants";
import useBrowserLayoutEffect from "../hooks/useBrowserLayoutEffect";
import Footer from "./Footer";
import Header from "./Header";
import SEO from "./SEO";
import { MainLayoutProps } from "./types";

const MainLayout = ({
    children,
    maxBodyWidth = false,
    title,
    openGraph
}: MainLayoutProps): JSX.Element => {
    const [windowWidth, setWindowWidth] = useState<number | undefined>(
        undefined
    );
    const router = useRouter();

    useBrowserLayoutEffect(() => {
        const changeWindowSize = () => {
            setWindowWidth(() => window.innerWidth);
        };
        changeWindowSize();
        window.addEventListener("resize", changeWindowSize);
        return () => window.removeEventListener("resize", changeWindowSize);
    }, []);

    const customOpenGraph = {
        ...openGraph,
        ogUrl: `${PROD_HOST}${router.asPath}`
    };

    return (
        <>
            <SEO title={title} openGraph={customOpenGraph} />
            <Header windowWidth={windowWidth} />
            <main className="c-Main-layout">
                {maxBodyWidth ? (
                    children
                ) : (
                    <div className="c-Main-layout__Inner">{children}</div>
                )}
            </main>
            <Footer windowWidth={windowWidth} />
        </>
    );
};

export default MainLayout;
