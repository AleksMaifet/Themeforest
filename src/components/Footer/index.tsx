import React from 'react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import EmailForm from '@/components/Forms/EmailForm';
import Image from '@/components/Image';
import TextComponent from '@/components/Text';
import TitleComponent from '@/components/Title';
import { FORM_TITLE, PNG } from '@/constants';
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

const { PLACEHOLDER_EMAIL, BUTTON } = FORM_TITLE;

const { LogoWhiteApp } = PNG;

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
    backgroundColor: 'none',
  },
  input: {
    backgroundColor: theme.colors.HelperBlue3,
  },
  button: {
    width: theme.spaces[16],
    backgroundColor: theme.colors.White,
    color: theme.colors.Black,
  },
};

const Footer = (): ReturnComponentType => (
  <Container>
    <ContainerWrapper>
      <EmailContainer>
        <EmailTitleContainer>
          <TitleComponent
            title={title}
            color={theme.colors.White}
            bottom={theme.spaces[5]}
          />
          <TextComponent text={text} color={theme.colors.White} />
        </EmailTitleContainer>
        <EmailForm
          placeholderTitle={PLACEHOLDER_EMAIL}
          buttonTitle={BUTTON}
          styleOptionsButton={style.button}
          styleOptionsInput={style.input}
        />
      </EmailContainer>
      <InformationalContainer>
        <SocialContainer>
          <Image context={LogoWhiteApp} />
          <TextComponent
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
        <TextComponent text={leftBlock} color={theme.colors.HelperBlue2} />
        <CopyRightWrapper>
          <TextComponent text={rightBlock.text} color={theme.colors.HelperBlue2} />
          <TextComponent text={rightBlock.preText} color={theme.colors.HelperBlue2} />
        </CopyRightWrapper>
      </CopyRightContainer>
    </ContainerWrapper>
  </Container>
);

export default Footer;
