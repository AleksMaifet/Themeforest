import styled from 'styled-components';

import theme from '@/theme';

export const RateContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: ${theme.spaces[17] * 2}px;
  padding: ${theme.spaces[7]}px ${theme.spaces[4]}px;
  background-color: ${theme.colors.White};
  box-shadow: ${theme.boxShadows[3]};
  border-radius: ${theme.spaces[1]}px;
  transition: ease 0.3s;

  :hover {
    background-color: ${theme.colors.Primary};

    button {
      background-color: ${theme.colors.White};

      span {
        color: ${theme.colors.Primary};
      }
    }

    div > button {
      :nth-child(1) {
        background-color: ${theme.colors.White};

        span {
          color: ${theme.colors.Primary};
        }
      }

      :nth-child(2) {
        background-color: ${theme.colors.Primary};
        border: 1px solid ${theme.colors.White};

        span {
          color: ${theme.colors.White};
        }
      }
    }

    h1,
    li {
      color: ${theme.colors.White};

      :before {
        color: ${theme.colors.White};
      }
    }
  }
`;

export const RateWrapper = styled.div`
  width: ${theme.spaces[14]}%;
`;

export const PriceContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${theme.spaces[3]}px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${theme.spaces[13]}px;

  button:nth-child(2) {
    border: 1px solid ${theme.colors.Primary};
    background-color: ${theme.colors.White};

    span {
      color: ${theme.colors.Primary};
    }
  }
`;

export const ConditionList = styled.ul`
  font-family: ${theme.fontFamily[1]};
  font-size: ${theme.textSize.sm}rem;
  color: ${theme.colors.Black};

  li {
    position: relative;

    :not(:last-child) {
      margin-bottom: ${theme.spaces[3]}px;
    }

    :before {
      content: '✓';
      position: absolute;
      left: -${theme.spaces[5]}px;
      color: ${theme.colors.Primary};
    }
  }
`;

export const ConditionItem = styled.li``;
