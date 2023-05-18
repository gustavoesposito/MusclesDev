import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Input } from 'native-base';
import {
  Container,
  InputWrapper,
  Header,
  Title,
  IconWrapper,
  ToDoWrapper,
  ToDoTitle,
  ToDoHolder,
  CleanAll,
  CleanAllText,
} from './styles';
import constants from '../../global/styles/constants';
import { Pressable } from 'react-native';
import Icon from '../../components/Icon/Icon';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Choosen: React.FunctionComponent = () => {
  const navigation = useNavigation();

  const [textInput, setTextInput] = useState<string>('');
  const [toDo, setToDo] = useState<string[]>([]);

  useEffect(() => {
    // Carregar os dados salvos do AsyncStorage quando o componente for montado
    loadData();
  }, []);

  useEffect(() => {
    // Salvar os dados no AsyncStorage sempre que houver uma alteração na lista de tarefas
    saveData();
  }, [toDo]);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('todoList', JSON.stringify(toDo));
    } catch (error) {
      console.log(error);
    }
  };

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem('todoList');
      if (data !== null) {
        setToDo(JSON.parse(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteItem = (index: number) => {
    setToDo(prevToDo => prevToDo.filter((_, i) => i !== index));
  };

  const handleDeleteAllItem = () => {
    setToDo([]);
  };

  return (
    <>
      <Container>
        <Header>
          <Title>Lista de tarefas</Title>
        </Header>

        <InputWrapper>
          <Input
            fontWeight={'semibold'}
            size="xl"
            variant="outline"
            placeholder="Adicione aqui..."
            placeholderTextColor={constants.colors.alert}
            color={constants.colors.dark}
            InputRightElement={
              <Pressable
                onPress={() => {
                  setToDo([...toDo, textInput]);
                  setTextInput('');
                }}
              >
                <IconWrapper>
                  <Icon
                    name={'add'}
                    size={'large'}
                    color={constants.colors.alert}
                  />
                </IconWrapper>
              </Pressable>
            }
            onChangeText={text => {
              setTextInput(text);
            }}
            value={textInput}
          />
        </InputWrapper>

        <CleanAll>
          <CleanAllText>Apague tudo</CleanAllText>
          <Icon
            name="cleaning-services"
            color={constants.colors.alert}
            onPress={() => {
              handleDeleteAllItem();
            }}
          />
        </CleanAll>

        <ToDoHolder>
          {toDo.map((task, index) => (
            <ToDoWrapper key={index} bottomBorder={index === toDo.length - 1}>
              <ToDoTitle>{task}</ToDoTitle>
              <IconWrapper>
                <Icon
                  name="trash-can"
                  bundle="MaterialCommunityIcons"
                  color={constants.colors.alert}
                  size="large"
                  onPress={() => handleDeleteItem(index)}
                />
              </IconWrapper>
            </ToDoWrapper>
          ))}
        </ToDoHolder>
      </Container>
    </>
  );
};
