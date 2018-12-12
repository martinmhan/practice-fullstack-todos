const React = require('react');

const TodoListItem = (props) => {
  return (
    <li>
      { props.todo.completed ? <del>{props.todo.todo}</del> : <span>{props.todo.todo}</span> }
      <button onClick={ () => {props.updateTodo(props.todo.id, props.todo.todo, !props.todo.completed);} }>
        Toggle Completed
      </button>

      <button onClick={ () => {props.deleteTodo(props.todo.id);} }>
        Delete Todo
      </button>

      <button onClick={ () => {props.updateTodo(props.todo.id, prompt('Enter your updated todo'), props.todo.completed);} }>
        Update Todo
      </button>
    </li>
  );
};

module.exports = TodoListItem;