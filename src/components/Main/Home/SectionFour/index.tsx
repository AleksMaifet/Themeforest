import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import Image from '@/components/Image';
import TextComponent from '@/components/Text';
import TitleComponent from '@/components/Title';
import { HomePageSection } from '@/mocks';
import theme from '@/theme';

import Benefit from './Benefit';
import {
  BenefitsContainer,
  Container,
  ContainerContext,
  ContainerWrapper,
  Line,
} from './styles';
import { IFourthSection } from './types';

const {
  HomeFourthSection: { benefits },
} = HomePageSection;

const FourthSection: React.FC<IFourthSection> = ({
  sectionTitle,
  sectionText,
}): ReturnComponentType => (
  <Container>
    <ContainerWrapper>
      <ContainerContext>
        <Line>
          {sectionTitle}
          {sectionText}
        </Line>
        <BenefitsContainer>
          {benefits.map(({ id, title, text, Img }) => (
            <Benefit
              key={id}
              title={
                <TitleComponent
                  title={title}
                  fontSize={theme.textSize.md}
                  top={theme.spaces[2]}
                  bottom={theme.spaces[2]}
                />
              }
              text={<TextComponent text={text} maxLines={4} />}
            >
              <Image context={<Img />} />
            </Benefit>
          ))}
        </BenefitsContainer>
      </ContainerContext>
    </ContainerWrapper>
  </Container>
);

export default memo(FourthSection);
