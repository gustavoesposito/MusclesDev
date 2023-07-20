import styled from 'styled-components/native';
import constants from '../../global/styles/constants';

interface RoundOptionsButtonProps {
  theme?: 'selected' | 'unSelected';
  color?: string;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

export const RoundOptionsButtonHolder = styled.TouchableOpacity<RoundOptionsButtonProps>`
  width: 140px;
  height: 140px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;

  ${({ theme }) =>
    theme === 'selected' &&
    `
    background-color: ${constants.colors.green_success_100}
  `}

  ${({ theme }) =>
    theme === 'unSelected' &&
    `
    background-color: ${constants.colors.dark_gray300}
  `}
`;

export const RoundOptionsButtonTitle = styled.Text<RoundOptionsButtonProps>`
  font-family: ${constants.fonts.lexend_regular};
  font-size: 15px;

  ${({ color }) => color && `color: ${color};`}

  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}px;`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}px;`}
`;

export const RoundOptionsButtonContainder = styled.View<RoundOptionsButtonProps>`
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}px;`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}px;`}
`;
