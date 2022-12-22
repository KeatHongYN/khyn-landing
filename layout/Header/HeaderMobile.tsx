import React, { useState } from "react";
import Link from "next/link";
import LogoKHYN from "../../assets/svg/logo-khyn.svg";
import { HamburgerProps } from "./types";

const Hamburger = ({ openMenu, setOpenMenu }: HamburgerProps): JSX.Element => {
    const handleHamburgerClick = () => {
        setOpenMenu((prevState) => !prevState);
    };

    return (
        <div
            className={`c-Hamburger ${openMenu && "c-Hamburger--open"}`}
            onClick={handleHamburgerClick}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

const HeaderMobile = (): JSX.Element => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="c-Header-mobile">
            <div className="c-Header-mobile__Top c-Top">
                <Link className="c-Top__Logo" href="/">
                    <LogoKHYN />
                </Link>
                <Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>
            <div
                className={`c-Header-mobile__Menu c-Menu ${
                    openMenu && "c-Header-mobile__Menu--show"
                }`}
            >
                <Link href="/">Home</Link>
                <Link href="/events">Events</Link>
                <Link href="/about-us">About us</Link>
                <Link href="/join-us">Join us</Link>
            </div>
        </div>
    );
};

export default HeaderMobile;
