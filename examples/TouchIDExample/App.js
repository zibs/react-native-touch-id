import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import TouchID from 'react-native-touch-id';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>react-native-touch-id</Text>

        <Text style={styles.instructions}>
          github.com/naoufal/react-native-touch-id
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.clickHandler}
          underlayColor="#0380BE"
          activeOpacity={1}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: '600',
            }}
          >
            Authenticate with Touch ID
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  clickHandler() {
    TouchID.isSupported()
      .then(() => {
        authenticate();
      })
      .catch(error => {
        alert('TouchID not supported');
      });
  }
}

function authenticate() {
  return TouchID.authenticate()
    .then(success => {
      alert('Authenticated Successfully');
    })
    .catch(error => {
      alert(error.message);
    });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    margin: 10,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  instructions: {
    marginBottom: 5,
    color: '#333333',
    fontSize: 13,
    textAlign: 'center',
  },
  button: {
    borderRadius: 3,
    marginTop: 200,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0391D7',
  },
});
