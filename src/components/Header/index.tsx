import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from '@/components/Image';
import { headerLinks, MEDIA_BUTTON_TITLE, SVG } from '@/constants';

import { ContainerWrapper, HeaderContainer, NavLine, NavLinkWrapper } from './styles';

const { IconPlay, LogoApp } = SVG;

const Header = (): ReturnComponentType => (
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
      <PrimaryButton title={MEDIA_BUTTON_TITLE} icon={<IconPlay />} />
    </ContainerWrapper>
  </HeaderContainer>
);

export default Header;
