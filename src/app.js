import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBJv1iUIx3IeguPAE9_npzD5DoQKKAgPnE',
        authDomain: 'auth-fe851.firebaseapp.com',
      databaseURL: 'https://auth-fe851.firebaseio.com',
      projectId: 'auth-fe851',
      storageBucket: 'auth-fe851.appspot.com',
      messagingSenderId: '224250937472'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;

      default:
        return (
          <View style={styles.spinnerViewStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>

    );
  }
}

const styles = {
  spinnerViewStyle: {
    paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default App;