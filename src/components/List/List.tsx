import React, { useState } from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Item from '../Item/Item';
import { ContainerList, ContentList, TitleList, ToDoList } from './style';

export default function List(tasks) {
  return (
    <ContainerList>
      <ContentList>
        <Form setTasks={setTasks} />
        {/* <Button
          onPress={() => {
            setTask(prevTask => [...prevTask, 'Estudar estado']);
          }}
        ></Button> */}
        <TitleList>Tarefas do dia</TitleList>
        {tasks.map((item, index) => (
          <ToDoList key={index}>
            <Item task={item} />
          </ToDoList>
        ))}
      </ContentList>
    </ContainerList>
  );
}
