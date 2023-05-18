import styled from 'styled-components/native';

export const ContainerForm = styled.View`
  align-items: center;
  margin: 10px;
  margin-top: 20px;
`;

export const ContentForm = styled.View`
  width: 400px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
`;

export const FormText = styled.Text`
  font-size: 30px;
  margin-top: 10px;
`;

export const FormInput = styled.TextInput`
  width: 350px;
  height: 30px;
  border-color: ${({ theme }) => theme.colors.success};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  margin: 10px;
  margin-top: 10px;
  padding-left: 10px;
`;
export const DeleteButton = styled.TouchableOpacity`
  width: 150px;
`;
