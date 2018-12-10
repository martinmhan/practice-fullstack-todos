const React = require('react');
const TodoListItem = require('./TodoListItem');

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo, i) => 
          <TodoListItem todo={todo} index={i} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} />
        )}
      </ul>
    </div>
  );
}

module.exports = TodoList;