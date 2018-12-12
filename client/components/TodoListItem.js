const React = require('react');

const TodoListItem = (props) => {
  return (
    <li>
      {props.completed ? <del>{props.todo}</del> : <span>{props.todo}</span>}
      <button onClick={() => { props.deleteTodo(props.todoId) } }>Delete me!</button>
      <button onClick={() => {
        props.updateTodo(
          props.todoId,
          {todo: prompt('Please enter your updated todo.'), completed: props.completed}
        )
      }}>Update me!</button>
      
      <button onClick={() => {
        props.updateTodo(
          props.todoId,
          {todo:props.todo, completed:!props.completed}
        )
      }}>Complete me!</button>
    </li>
  );
}

module.exports = TodoListItem;