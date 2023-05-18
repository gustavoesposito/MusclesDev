import styled from 'styled-components/native';
import constants from '../../global/styles/constants';

interface ButtonHolderProps {
  theme: 'default' | 'disabled' | 'success';
  loading: boolean;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

export const ButtonWrapper = styled.View`
  width: 100%;
`;

export const ButtonHolder = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonHolderProps>`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding: 0 16px;
  height: 48px;

  ${({ loading }) =>
    loading ? 'justify-content: center;' : 'justify-content: space-between;'}

  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}px;`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}px;`}

  ${({ theme }) =>
    theme === 'disabled' &&
    `
    background-color: ${constants.colors.light_gray400};
  `}

  ${({ theme }) =>
    theme === 'default' &&
    `
    background-color: ${constants.colors.alert};
  `};

  ${({ theme }) =>
    theme === 'success' &&
    `
    background-color: ${constants.colors.green_success};
  `};
`;

export const TextButton = styled.Text<ButtonHolderProps>`
  font-size: 25px;
  color: ${({ theme }) => constants.colors.light};
`;
