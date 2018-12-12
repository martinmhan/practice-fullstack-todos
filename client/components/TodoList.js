const React = require('react');
const TodoListItem = require('./TodoListItem.js');

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map(({ todo, id, completed }) => (
          <TodoListItem todo={todo} todoId={id} completed={completed} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo}/>
        ))}
      </ul>
    </div>
  );
};

module.exports = TodoList;