/* eslint-disable no-nested-ternary */
import React from "react";
import FlagBanner from "../../components/shared/FlagBanner";
import { DISABLE_DEV_FLAG, ENVIRONMENT } from "../../config/constants";
import { HeaderProps } from "../types";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = ({ windowWidth }: HeaderProps): JSX.Element => (
    <>
        <header>
            {windowWidth ? (
                windowWidth > 1000 ? (
                    <HeaderDesktop />
                ) : (
                    <HeaderMobile />
                )
            ) : null}
        </header>
        {ENVIRONMENT === "DEV" && !DISABLE_DEV_FLAG && (
            <FlagBanner
                isMobile={!(windowWidth && windowWidth > 1000)}
                text="DEV ENVIRONMENT"
            />
        )}
    </>
);

export default Header;
