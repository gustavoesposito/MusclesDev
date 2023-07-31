import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark_gray50};
`;
export const RoundOptionsButtonWrapper = styled.View`
  flex: 6;
  align-items: center;
  justify-content: center;
`;

export const PersonalChooseTextHolder = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
  margin: 32px 18px 0;
`;

export const PersonChoseTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.rubik_regular};
  font-size: 18px;
  padding-top: 15px;
`;

export const PersonChoseText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.lexend_bold};
  font-size: 15px;
  margin-top: 12px;
`;

export const MeasureTextHolder = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 32px 18px 0;
`;

export const MeasureText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.lexend_bold};
  font-size: 15px;
  margin-top: 12px;
`;

export const MeasureTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.rubik_regular};
  font-size: 18px;
  padding-top: 15px;
`;

export const StartButtonWrapper = styled.View`
  flex: 1;
  align-items: flex-end;
  margin: 0 16px;
`;
