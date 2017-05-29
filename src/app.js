import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBJv1iUIx3IeguPAE9_npzD5DoQKKAgPnE',
        authDomain: 'auth-fe851.firebaseapp.com',
      databaseURL: 'https://auth-fe851.firebaseio.com',
      projectId: 'auth-fe851',
      storageBucket: 'auth-fe851.appspot.com',
      messagingSenderId: '224250937472'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
       <LoginForm />
      </View>

    );
  }
}

export default App;