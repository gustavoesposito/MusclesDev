import styled from 'styled-components/native';
import constants from '../../global/styles/constants';

interface ButtonHolderProps {
  theme: 'default' | 'disabled' | 'success';
  loading: boolean;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  mode?: 'compact' | 'elongated';
}

export const ButtonWrapper = styled.View<ButtonHolderProps>`
margin-right: ${({ mode }) => (mode === 'compact' ? '8px' : '16px')}
margin-top: ${({ mode }) => (mode === 'compact' ? '0px' : '16px')}
margin-bottom: ${({ mode }) => (mode === 'compact' ? '0px' : '16px')}
margin-left: ${({ mode }) => (mode === 'compact' ? '8px' : '16px')}
`;

export const ButtonHolder = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonHolderProps>`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding: 0 16px;
  width: ${({ mode }) => (mode === 'compact' ? '120px' : '100%')};
  height: ${({ mode }) => (mode === 'compact' ? '120px' : '75px')};

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
  `}

  ${({ theme }) =>
    theme === 'success' &&
    `
    background-color: ${constants.colors.green_success};
  `}
`;

export const TextButton = styled.Text<ButtonHolderProps>`
  margin-top: auto;
  margin-bottom: 8px;
  text-align-vertical: bottom;
  font-size:'12px'
  color: ${({ theme }) => constants.colors.light};
`;
