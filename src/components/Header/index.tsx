import React, { MouseEvent, useCallback, useContext } from 'react';

import { useLocation } from 'react-router-dom';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from '@/components/Image';
import { Context } from '@/components/Provider/contex';
import {
  headerLinks,
  MEDIA_BUTTON_TITLE_STOP,
  MEDIA_BUTTON_TITLE_WATCH,
  PATH,
  setShowVideoAC,
  SVG,
} from '@/constants';

import { ContainerWrapper, HeaderContainer, NavLine, NavLinkWrapper } from './styles';

const { IconPlay, LogoApp } = SVG;

const Header = (): ReturnComponentType => {
  const { pathname } = useLocation();

  const {
    state: { isVideoShow },
    dispatch,
  } = useContext(Context);

  const currentButtonTitle = isVideoShow
    ? MEDIA_BUTTON_TITLE_STOP
    : MEDIA_BUTTON_TITLE_WATCH;

  const isButtonDisabled = pathname !== PATH.HOME_PAGE_ROUTE;

  const handleVideo = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (e.currentTarget.innerText === MEDIA_BUTTON_TITLE_WATCH) {
        dispatch(setShowVideoAC(true));
        return;
      }
      dispatch(setShowVideoAC(false));
    },
    [dispatch],
  );

  return (
    <HeaderContainer>
      <ContainerWrapper>
        <Image context={<LogoApp />} />
        <NavLine>
          {headerLinks.map(({ name, link }) => (
            <NavLinkWrapper to={link} key={name} end>
              {name}
            </NavLinkWrapper>
          ))}
        </NavLine>
        <PrimaryButton
          title={currentButtonTitle}
          icon={<IconPlay />}
          callback={handleVideo}
          isDisabled={isButtonDisabled}
          boxShadow
          borderRadius
        />
      </ContainerWrapper>
    </HeaderContainer>
  );
};

export default Header;
