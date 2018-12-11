const React = require('react');
const TodoListItem = require('./TodoListItem.js');

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo, i) => (
          <TodoListItem todo={todo} index={i} key={todo.id} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo}/>
        ))}
      </ul>
    </div>
  );
};

module.exports = TodoList;