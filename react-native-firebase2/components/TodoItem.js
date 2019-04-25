import React from 'react';
import {
  ListItem,
  CheckBox,
  Body,
  Text,
} from 'native-base';

const TodoItem = ({ completed, todoText, toggleCompleted, index }) => (
  <ListItem>
    <CheckBox
      checked={completed}
      onPress={() => { toggleCompleted(index); }}
    />
    <Body>
      <Text>{todoText}</Text>
    </Body>
  </ListItem>
);

export default TodoItem;
