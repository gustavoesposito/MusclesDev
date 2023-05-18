import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.neutral_00};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 00px;
`;

export const ButtonWrapper = styled.View`
  flex:1
  width: 80%;
  justify-content: center;
  align-items: center;
  position:relative
  margin: 300px 40px 15px
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin-top: 90px;
  color: ${({ theme }) => theme.colors.dark};
`;
