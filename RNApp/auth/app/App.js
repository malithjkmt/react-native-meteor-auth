import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import { loginWithTokens } from './fb-login';
import SignIn from './SignIn';
import SignOut from './SignOut';

const url = 'http://192.168.1.3:3000/websocket';
Meteor.connect(url);

class App extends Component {
  componentWillMount() {
    loginWithTokens();
  }

  render() {
    if (this.props.user) {
      return <SignOut />
    }
    return <SignIn />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, App);