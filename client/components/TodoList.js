const React = require('react');
const TodoListItem = require('./TodoListItem');

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => 
          <TodoListItem todo={todo} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} />
        )}
      </ul>
    </div>
  );
}

module.exports = TodoList;