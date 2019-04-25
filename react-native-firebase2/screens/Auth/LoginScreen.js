import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Header,
  Content,
  Button,
  Container,
  Left,
  Body,
  Right,
  Title,
  Form,
  Input,
  Label,
  Item,
  Text,
  Row,
} from 'native-base';

import firebase from '../../firebase/index';
import ErrorMessage from '../../components/ErrorMessage';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
  }

  handleEmailInput = (textInput) => {
    this.setState({ email: textInput });
  };

  handlePasswordInput = (textInput) => {
    this.setState({ password: textInput });
  };

  handleLogin = async () => {
    try {
      const { email, password } = this.state;
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.navigation.navigate('Home', { email });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Log In</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.Content}>
          <Form>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input onChangeText={this.handleEmailInput} />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input onChangeText={this.handlePasswordInput} />
            </Item>
          </Form>
          <ErrorMessage message={this.state.errorMessage} />
          <Button block onPress={this.handleLogin} style={styles.Button}>
            <Text>Log In</Text>
          </Button>
          <Text style={{marginTop: 10}}>Don't have an account?</Text>
          <Text
            onPress={() => { this.props.navigation.navigate('Signup'); }}
            style={{color:'blue', marginTop:10}}
          >
            Sign Up
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Content: {
    padding: 10,
  },
  Button: {
    marginTop: 10,
    marginBottom: 10,
  },
});
