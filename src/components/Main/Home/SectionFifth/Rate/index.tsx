import React, { memo } from 'react';

import { ReturnComponentType } from '@/commonTypes';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TitleContainer from '@/components/Title';
import theme from '@/theme';

import {
  ButtonContainer,
  ConditionItem,
  ConditionList,
  PriceContent,
  RateContainer,
  RateWrapper,
} from './styles';
import { IRate } from './types';

const buttonStyle = {
  primary: {
    width: theme.spaces[15] * 2,
    margin: theme.spaces[6],
  },
  secondary: {
    width: theme.spaces[8],
  },
};

const Rate: React.FC<IRate> = ({
  value: { title, price, currency, term, buttonTitle, conditions },
}): ReturnComponentType => {
  const titleCard = currency ? currency + price : price;

  return (
    <RateContainer>
      <RateWrapper>
        <TitleContainer title={title} fontSize={theme.textSize.sm} />
        <PriceContent>
          <TitleContainer title={titleCard} fontSize={theme.textSize.md} />
          <ButtonContainer>
            {term.map((el, index) => (
              <PrimaryButton
                key={`${el + index}`}
                title={el}
                styleOptions={buttonStyle.secondary}
                borderRadius
              />
            ))}
          </ButtonContainer>
        </PriceContent>
      </RateWrapper>
      <PrimaryButton
        title={buttonTitle}
        styleOptions={buttonStyle.primary}
        borderRadius
      />
      <ConditionList>
        {conditions.map((el, index) => (
          <ConditionItem key={`${el + index}`}>{el}</ConditionItem>
        ))}
      </ConditionList>
    </RateContainer>
  );
};

export default memo(Rate);
