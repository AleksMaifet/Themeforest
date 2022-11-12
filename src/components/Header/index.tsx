import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Button from '@/components/Button';
import { ContainerWrapper, headerLinks, MEDIA_BUTTON_TITLE, SVG } from '@/constants';

import { HeaderContainer, NavigationWrapper, NavLinkWrapper } from './styles';

const { IconPlay, LogoApp } = SVG;

const Header = (): ReturnComponentType => (
  <HeaderContainer>
    <ContainerWrapper>
      <LogoApp />
      <NavigationWrapper>
        {headerLinks.map(({ name, link }) => (
          <NavLinkWrapper to={link} key={name} end>
            {name}
          </NavLinkWrapper>
        ))}
      </NavigationWrapper>
      <Button title={MEDIA_BUTTON_TITLE} icon={<IconPlay />} />
    </ContainerWrapper>
  </HeaderContainer>
);

export default Header;
