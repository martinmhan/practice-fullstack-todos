const React = require('react');
const TodoList = require('./TodoList.js');
const AddTodoBar = require('./AddTodoBar.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.props.crud.dbGetTodos() // get todos from db
      .then(data => {
        let todos = data.data;
        this.setState({ todos });
      })
      .catch(err => {
        console.log('Error getting todos from DB: ', err);
      });
  }

  addTodo = (todo) => {
    this.props.crud.dbPostTodo(todo) // add todo to database
      .then(() => {
        return this.props.crud.dbGetTodos(); // get new list of todos from database (incl. id of new todo)
      })
      .then(data => { // update state with new list of todos
        let todos = data.data;
        this.setState({ todos });
      });
  };

  deleteTodo = (index, id) => {
    let todos = [...this.state.todos];
    todos.splice(index, 1); // delete todo on client-side
    this.setState({ todos });
    this.props.crud.dbDeleteTodo(id); // delete todo in database
  };

  updateTodo = (index, todoId, newTodo, newCompleted) => {
    console.log(index, todoId);
    let todos = [...this.state.todos];
    todos.splice(index, 1, {index, id: todoId, todo: newTodo, completed: newCompleted}); // update todo on client-side
    this.props.crud.dbPutTodo(todoId, newTodo, newCompleted) // update todo in database
      .then(() => {
        return this.props.crud.dbGetTodos();
      })
      .then(data => { // update state with latest from database
        let todos = data.data;
        this.setState({ todos });
      });
  };

  render() {
    return (
      <div>
        <AddTodoBar addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
};

module.exports = App;