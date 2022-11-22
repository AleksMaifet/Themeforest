import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import PrimaryInput from '@/components/Input';
import TextContainer from '@/components/Text';
import TitleContainer from '@/components/Title';
import { FOOTER_INPUT, SVG } from '@/constants';
import { FooterSection } from '@/mocks';
import theme from '@/theme';

import ListContainer from './ListContainer';
import {
  Container,
  ContainerWrapper,
  CopyRightContainer,
  CopyRightWrapper,
  EmailContainer,
  EmailTitleContainer,
  InformationalContainer,
  Line,
  SocialContainer,
  SocialIconContainer,
} from './styles';

const { PLACEHOLDER_TITLE, BUTTON_TITLE } = FOOTER_INPUT;

const { LogoWhiteApp } = SVG;

const {
  title,
  text,
  social: { socialText, socialIcon },
  info,
  copyright: { leftBlock, rightBlock },
} = FooterSection;

const style = {
  icon: {
    width: theme.spaces[5],
    padding: 1,
    backGroundColor: 'none',
  },
  button: {
    width: theme.spaces[16],
    backGroundColor: theme.colors.White,
    color: theme.colors.Black,
  },
};

const Footer = (): ReturnComponentType => (
  <Container>
    <ContainerWrapper>
      <EmailContainer>
        <EmailTitleContainer>
          <TitleContainer
            title={title}
            color={theme.colors.White}
            bottom={theme.spaces[5]}
          />
          <TextContainer text={text} color={theme.colors.White} />
        </EmailTitleContainer>
        <PrimaryInput
          placeholderTitle={PLACEHOLDER_TITLE}
          buttonTitle={BUTTON_TITLE}
          styleOptionsButton={style.button}
        />
      </EmailContainer>
      <InformationalContainer>
        <SocialContainer>
          <LogoWhiteApp fill="white" />
          <TextContainer
            text={socialText}
            top={theme.spaces[4]}
            bottom={theme.spaces[4]}
          />
          <SocialIconContainer>
            {socialIcon.map(({ id, Icon }) => (
              <PrimaryButton key={id} icon={<Icon />} styleOptions={style.icon} />
            ))}
          </SocialIconContainer>
        </SocialContainer>
        <Line>
          {info.map((el, index) => (
            <ListContainer key={`${el.title + index}`} value={el} />
          ))}
        </Line>
      </InformationalContainer>
      <CopyRightContainer>
        <TextContainer text={leftBlock} color={theme.colors.HelperBlue2} />
        <CopyRightWrapper>
          <TextContainer text={rightBlock.text} color={theme.colors.HelperBlue2} />
          <TextContainer text={rightBlock.preText} color={theme.colors.HelperBlue2} />
        </CopyRightWrapper>
      </CopyRightContainer>
    </ContainerWrapper>
  </Container>
);

export default Footer;
