import React, { useEffect, useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import { MainLayoutProps } from "./types";

const MainLayout = ({ children, title }: MainLayoutProps): JSX.Element => {

  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const changeWindowSize = () => {
      setWindowWidth(() => window.innerWidth);
    };
    changeWindowSize();
    window.addEventListener("resize", changeWindowSize);
    return () => window.removeEventListener('resize', changeWindowSize);
  }, []);

  return (
    <>
      <Title
        title={title}
      />
      <Header windowWidth={windowWidth} />
      <main className="c-Main-layout">
        {children}
      </main>
      <Footer windowWidth={windowWidth} />
    </>
  );
};

export default MainLayout;
