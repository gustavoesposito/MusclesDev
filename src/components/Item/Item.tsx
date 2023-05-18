import React from 'react';
import { ContainerItem, ListItem } from './style';

interface ItemProps {
  task: string;
}
// eslint-disable-next-line react/display-name
export default function ({ task }: ItemProps) {
  return (
    <ContainerItem>
      {tasks.map((item, index) => (
        <ToDoList key={index}>
          <Item task={item} />
        </ToDoList>
      ))}
      <ListItem>{task}</ListItem>
    </ContainerItem>
  );
}
