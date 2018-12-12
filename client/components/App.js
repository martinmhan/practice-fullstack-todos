const React = require('react');
const TodoList = require('./Todolist');
const AddTodoBar = require('./AddTodoBar');
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios.get('/api')
      .then(({data}) => {
        this.setState({ todos: data });
      });
  }

  addTodo = (newTodo) => {
    axios.post('/api', { newTodo })
      .then(this.getTodos);
  }

  updateTodo = (todoId, newTodo) => {
    axios.put('/api', { todoId, newTodo })
      .then(this.getTodos);
  }

  deleteTodo = (todoId) => {
    axios.delete(`/api/${todoId}`)
      .then(this.getTodos);
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