import styled from 'styled-components/native';
import constants from '../../global/styles/constants';

interface ArrowHeaderProps {
  theme?: 'dark' | 'light';
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}

export const ArrowHeaderHolder = styled.TouchableOpacity<ArrowHeaderProps>`
  flex-direction: row;
  justify-content: flex-start;

  ${({ theme }) =>
    theme === 'dark' &&
    `
    color:${constants.colors.black};
  `}

  ${({ theme }) =>
    theme === 'light' &&
    `
     color: ${constants.colors.white};
  `}

  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}px;`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}px;`}
`;
