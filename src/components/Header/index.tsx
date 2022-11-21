import React, { useCallback, useContext } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from '@/components/Image';
import { Context } from '@/components/Provider/contex';
import { headerLinks, MEDIA_BUTTON_TITLE, setShowVideoAC, SVG } from '@/constants';

import { ContainerWrapper, HeaderContainer, NavLine, NavLinkWrapper } from './styles';

const { IconPlay, LogoApp } = SVG;

const Header = (): ReturnComponentType => {
  const {
    state: { isVideoShow },
    dispatch,
  } = useContext(Context);

  const handleVideo = useCallback(() => {
    dispatch(setShowVideoAC(true));
  }, [dispatch]);

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
          title={MEDIA_BUTTON_TITLE}
          icon={<IconPlay />}
          callback={handleVideo}
          isDisabled={isVideoShow}
          boxShadow
          borderRadius
        />
      </ContainerWrapper>
    </HeaderContainer>
  );
};

export default Header;
