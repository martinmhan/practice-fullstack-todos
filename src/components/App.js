const React = require('react');
const TodoList = require('./Todolist');
const AddTodoBar = require('./AddTodoBar');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['walk the dog', 'cook dinner']
    };
  }

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  }

  deleteTodo = (todo) => {
    let todos = this.state.todos.splice().splice.bind.
  }

  render() {
    return (
      <div>
        <AddTodoBar addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

module.exports = App;