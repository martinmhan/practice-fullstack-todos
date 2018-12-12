const React = require('react');

const ListItem = (props) => {
  return (
    <li>
      {props.item.todo}
      <button onClick={ () => {props.deleteTodo(props.item._id);} }>Delete me!</button>
      <button onClick={ () => {props.updateTodo(props.item._id, prompt('Enter new todo'))} }>Update me!</button>
    </li>
  )
}

module.exports = ListItem;