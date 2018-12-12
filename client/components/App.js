const React = require('react');
const TodoList = require('./TodoList.js');
const AddTodoBar = require('./AddTodoBar.js');
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
    axios({
      method: 'get',
      url: '/api'
    })
      .then(({ data }) => {
        this.setState({
          todos: data
        });
      })
      .catch(err => console.log(err));
  }

  addTodo = (todo) => {
    axios({
      url: '/api',
      method: 'post',
      data: { todo }
    })
      .then(this.getTodos)
      .catch(err => console.log(err));
  };

  deleteTodo = (todoId) => {
    axios({
      url: `/api/${todoId}`,
      method: 'delete'
    })
      .then(this.getTodos)
      .catch(err => console.log(err));
  }
  
  updateTodo = (todoId, newTodo, newCompleted) => {
    axios({
      url: '/api',
      method: 'put',
      data: { todoId, newTodo, newCompleted }
    })
      .then(this.getTodos)
      .catch(err => console.log(err));
  }

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