import React from 'react';
import FlagBanner from '../../components/shared/FlagBanner';
import { ENVIRONMENT } from '../../config/constants';
import { HeaderProps } from '../types';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = ({ windowWidth }: HeaderProps): JSX.Element => {
  return (
    <>
      <header>
        {
          windowWidth && windowWidth > 1000 ?
            <HeaderDesktop /> :
            <HeaderMobile />
        }
      </header>
      {ENVIRONMENT === "dev" && <FlagBanner isMobile={windowWidth && windowWidth > 1000 ? false : true} text="DEV ENVIRONMENT" />}
    </>
  );
};

export default Header;