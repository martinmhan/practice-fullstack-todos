const React = require('react');

const TodoListItem = (props) => {
  return (
    <li>
      {props.todo}
      <button onClick={() => { props.deleteTodo(props.index)} }>Delete Todo</button>
      <button onClick={() => { props.updateTodo(props.index, prompt('Please enter your updated todo.'))} }>Update Todo</button>
    </li>
  );
}

module.exports = TodoListItem;