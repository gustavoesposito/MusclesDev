import styled from 'styled-components/native';

export const ContainerList = styled.View`
  align-items: center;
  margin: 10px;
  margin-top: 40px;
`;

export const ContentList = styled.View`
  width: 400px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
`;

export const TitleList = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 30px;
`;

export const ToDoList = styled.View`
  width: 150px;
  height: 30px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.gray500};
  border-radius: 5px;
  padding: 2px;
`;
