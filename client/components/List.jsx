import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <ul>
      {props.list.map(item => (
        <ListItem item={item} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo} />
      ))}
    </ul>
  </div>
)

export default List;