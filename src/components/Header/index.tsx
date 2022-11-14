import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { headerLinks, MEDIA_BUTTON_TITLE, SVG } from '@/constants';

import { ContainerWrapper, HeaderContainer, NavLinkWrapper } from './styles';

const { IconPlay, LogoApp } = SVG;

const Header = (): ReturnComponentType => (
  <HeaderContainer>
    <ContainerWrapper>
      <LogoApp />
      <nav>
        {headerLinks.map(({ name, link }) => (
          <NavLinkWrapper to={link} key={name} end>
            {name}
          </NavLinkWrapper>
        ))}
      </nav>
      <PrimaryButton title={MEDIA_BUTTON_TITLE} icon={<IconPlay />} />
    </ContainerWrapper>
  </HeaderContainer>
);

export default Header;
