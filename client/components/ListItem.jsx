import React from 'react';

const ListItem = (props) => (
  <li>
    {props.item.name}
    <button onClick={ () => {props.deleteTodo(props.item.id);} }>Delete me!</button>
    <button onClick={ () => {props.updateTodo(props.item.id, prompt('Enter your updated todo'))} }>Update me!</button>
  </li>
);

export default ListItem;