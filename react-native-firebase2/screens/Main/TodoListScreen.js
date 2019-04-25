import React, { Component } from 'react';
import DialogInput from 'react-native-dialog-input';
import {
  Container,
  Header,
  Content,
  Body,
  Title,
} from 'native-base';

import TodoList from '../../components/TodoList';
import AddTodoButton from '../../components/AddTodoButton';
import db from '../../firebase/db';

export default class TodoListScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDialogVisible: false,
      email: '',
      todos: [],
    };
  }

  componentDidMount = async () => {
    const email = this.props.navigation.getParam('email');
    await this.setState({ email });
    this.getTodos();
  };

  getTodos = async () => {
    try {
      const { email } = this.state;
      const userRef = await db.collection('users').doc(email).get();
      const { todos } = userRef.data();
      this.setState({ todos });
    } catch (err) {
      console.log(err);
    }
  };

  addTodo = async (textInput) => {
    try {
      const { todos, email } = this.state;
      const newTodo = { todoText: textInput, completed:false };
      const userRef = await db.collection('users').doc(email);
      await userRef.update({ todos: [...todos, newTodo] });
      await this.setState({ isDialogVisible: false });
      this.getTodos();
    } catch (err) {
      this.setState({ isDialogVisible: false });
    }
  };

  updateTodo = async (textInput, index) => {
    try {
      
    } catch (err) {
      
    }
  };

  deleteTodo = async (index) => {
    try {

    } catch (err) {

    }
  };

  toggleCompleted = async(index) => {
    const todos = [...this.state.todos];
    const { email } = this.state;
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
    const userRef = await db.collection('users').doc(email);
    await userRef.update({ todos });
    this.getTodos();
  };

  closeDialog = () => {
    this.setState({ isDialogVisible: false });
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Todo List</Title>
          </Body>
        </Header>
        <Content>
          <TodoList
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
          />
          <AddTodoButton
            displayDialog={() => { this.setState({ isDialogVisible: true }); }}
          />
          <DialogInput
            isDialogVisible={this.state.isDialogVisible}
            title="Add Todo"
            message="Enter a new Todo!"
            hintInput="Your new Todo"
            submitInput={(textInput) => { this.addTodo(textInput); }}
            closeDialog={this.closeDialog}
          />
        </Content>
      </Container>
    );
  }
}
