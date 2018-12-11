const React = require('react');
const TodoList = require('./Todolist');
const AddTodoBar = require('./AddTodoBar');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.props.crud.dbGetTodos()
      .then(data => {
        let todos = data.map(todo => todo.todo);
        this.setState({ todos });
      });
  }

  addTodo = (todo) => {
    let todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.props.crud.dbAddTodo(todo);
  }

  deleteTodo = (index) => {
    let todos = [...this.state.todos];
    let todo = this.state.todos[index];
    todos.splice(index, 1);
    this.setState({ todos });
    this.props.crud.dbDeleteTodo(todo);
  }

  updateTodo = (index, newTodo) => {
    let todos = [...this.state.todos];
    let oldTodo = this.state.todos[index];
    todos.splice(index, 1, newTodo);
    this.setState({ todos });
    this.props.crud.dbUpdateTodo(oldTodo, newTodo);
  }

  render() {
    return (
      <div>
        <AddTodoBar addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
      </div>
    );
  }
};

module.exports = App;