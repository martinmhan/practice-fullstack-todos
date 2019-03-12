import React, { Component } from 'react';
import Axios from 'axios';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: '',
    };
  }

  componentWillMount = () => {
    this.getTodos();
  };

  getTodos = async () => {
    try {
      console.log('getTodos');
      const { data } = await Axios.get('http://localhost:5000/todos');
      this.setState({ todos: data });
    } catch (err) {
      console.error(err);
    }
  };

  handleTextInput = (e) => {
    console.log('handleTextInput');
    try {
      e.preventDefault();
      const todo = e.target.value;
      this.setState({ todo });
    } catch (err) {
      console.error(err);
    }
  };

  addTodo = async () => {
    console.log('addTodo: ', this.state.todo);
    try {
      await Axios.post('http://localhost:5000/todos', { todo: this.state.todo });
      this.getTodos();
    } catch (err) {
      console.error(err);
    }
  }

  render = () => (
    <div id="app">
      App
      <TodoInput handleTextInput={this.handleTextInput} addTodo={this.addTodo} />
      <TodoList todos={this.state.todos} />
    </div>
  );
}

export default App;
