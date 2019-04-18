import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  ListView,
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Input,
  Item,
  Button,
  Icon,
  ListItem,
} from 'native-base';
import DialogInput from 'react-native-dialog-input';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBdAQPZ6Lui35dlZN09dYH4orRLjrFWOQc',
  authDomain: 'reactnative-todolist-d26a8.firebaseapp.com',
  databaseURL: 'https://reactnative-todolist-d26a8.firebaseio.com/',
  projectId: 'reactnative-todolist-d26a8',
  storageBucket: 'reactnative-todolist-d26a8.appspot.com',
  messagingSenderId: '896495020771',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      todoList: [],
      newTodo: '',
      selectedTodo: null,
      isDialogVisible: false,
    };
  }

  componentDidMount = async () => {
    this.getTodos();
  };

  getTodos = async () => {
    try {
      const todoList = [];
      const querySnapshot = await db.collection('todos').get();
      querySnapshot.forEach(doc => todoList.push({ id: doc.id, ...doc.data() }));
      this.setState({ todoList });
    } catch (err) {
      console.error(err);
    }
  };

  addTodo = async (todo) => {
    try {
      await db.collection('todos').add({ todo });
      this.todoInput._root.setNativeProps({ text: '' });
      this.getTodos();
    } catch (err) {
      console.error(err);
    }
  };

  deleteTodo = async (i) => {
    try {
      await db.collection('todos').doc(this.state.todoList[i].id).delete();
      this.getTodos();
    } catch (err) {
      console.error(err);
    }
  };

  updateTodo = async (updatedTodo) => {
    try {
      await db.collection('todos')
        .doc(this.state.todoList[this.state.selectedTodo].id)
        .update({ todo: updatedTodo });
      this.getTodos();
      this.closeDialog();
    } catch (err) {
      console.error(err);
    }
  };

  openDialog = () => {
    this.setState({ isDialogVisible: true });
  }

  closeDialog = () => {
    this.setState({ isDialogVisible: false });
  };

  render() {
    return (
      <Container>
        <Header style={{marginTop: StatusBar.currentHeight}}>
          <Content>
            <Item>
              <Input
                ref={(input) => this.todoInput = input }
                onChangeText={newTodo => { this.setState({ newTodo }); }}
                placeholder="Add New Todo"
              />
              <Button onPress={() => { this.addTodo(this.state.newTodo); }}>
                <Icon name="add" />
              </Button>
            </Item>
          </Content>
        </Header>

        <Content>
          <DialogInput
            isDialogVisible={this.state.isDialogVisible}
            title="Update Todo"
            message="Enter your updated todo"
            hintInput="Updated Todo"
            submitInput={(inputText) => { this.updateTodo(inputText); }}
            closeDialog={() => { this.closeDialog(); }}
          />
          {this.state.todoList.map(({ todo }, i) => (
            <ListItem>
              <Text>{todo}</Text>
              <Button onPress={() => { this.deleteTodo(i); }}>
                <Icon name="trash" />
              </Button>
              <Button onPress={() => {
                  this.setState({ selectedTodo: i });
                  this.openDialog();
                }}>
                <Icon name="update" />
              </Button>
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
