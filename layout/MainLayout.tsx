import React, { useState } from "react";
import useBrowserLayoutEffect from "../hooks/useBrowserLayoutEffect";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import { MainLayoutProps } from "./types";

const MainLayout = ({
    children,
    maxBodyWidth = false,
    title
}: MainLayoutProps): JSX.Element => {
    const [windowWidth, setWindowWidth] = useState<number | undefined>(
        undefined
    );

    useBrowserLayoutEffect(() => {
        const changeWindowSize = () => {
            setWindowWidth(() => window.innerWidth);
        };
        changeWindowSize();
        window.addEventListener("resize", changeWindowSize);
        return () => window.removeEventListener("resize", changeWindowSize);
    }, []);

    return (
        <>
            <Title title={title} />
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
