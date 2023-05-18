import styled from 'styled-components/native';
import constants from '../../global/styles/constants';

interface ToDoProps {
  bottomBorder?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.neutral_00};
`;

export const InputWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-left: 32px
  padding-right: 32px;
  width: 100%;
`;

export const IconWrapper = styled.View`
  margin-right: 16px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 90px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ToDoWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ToDoProps>`
 flex-direction:row;
 justify-content: space-between
  border-top-width: 1px;
  border-top-color: ${constants.colors.dark};
  padding-bottom:20px
  padding-top: 20px;

  ${({ bottomBorder }) =>
    bottomBorder &&
    `
  border-bottom-width: 1px;
  border-bottom-color: ${constants.colors.dark};
  `};
`;

export const ToDoTitle = styled.Text`
  font-size: 16px;
  font-weight: 500
  justify-content: center;
  align-items: center;
  padding-left: 24px
`;

export const ToDoHolder = styled.ScrollView`
  margin-top: 16px;
`;

export const CleanAll = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 32px;
  margin-right: 16px;
`;

export const CleanAllText = styled.Text`
  font-size: 16px;
  margin-right: 8px;
  color: ${constants.colors.alert};
`;
