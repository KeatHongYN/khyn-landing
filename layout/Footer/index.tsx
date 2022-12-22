import React from "react";
import { FooterProps } from "../types";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = ({ windowWidth }: FooterProps): JSX.Element => (
    <footer>
        {windowWidth && windowWidth > 1000 ? (
            <FooterDesktop />
        ) : (
            <FooterMobile />
        )}
    </footer>
);

export default Footer;
