import React, { useState } from 'react';
import Button from '../Button/Button';
import { ContainerForm, ContentForm, FormText, FormInput } from './style';

interface FormType {
  setTasks: () => string[];
}

export default function Form({ setTasks }: FormType) {
  const [texto, setTexto] = useState('');

  return (
    <ContainerForm>
      <ContentForm>
        <FormText>Adicione um novo estudo</FormText>
        <FormInput
          placeholder="Digite uma tarefa"
          value={texto}
          onChangeText={setTexto}
        />
        <Button
          title="Adicionar"
          onPress={() => {
            setTasks(prevTask => (prevTask ? [...prevTask, texto] : [texto]));
          }}
        />
      </ContentForm>
    </ContainerForm>
  );
}
