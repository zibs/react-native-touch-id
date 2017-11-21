import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import TouchID from 'react-native-touch-id';

export default class App extends Component<{}> {
  _pressHandler() {
    const optionalConfigObject = { title: 'Authentication Required', color: '#e00606' };
    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then(success => {
        Alert.alert('Authenticated Successfully');
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
      });
  }
  _testSupport() {
    TouchID.isSupported()
      .then(supported => {
        // Success code
        Alert.alert('Touch ID supported');
      })
      .catch(error => {
        // Failure code
        Alert.alert('Touch ID not support');
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to react-native-touch-id!</Text>
        <TouchableHighlight style={styles.button} onPress={this._pressHandler}>
          <Text style={styles.text}>Authenticate with Touch ID</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this._testSupport}>
          <Text style={styles.text}>Test Support</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    borderWidth: 1,
    borderRadius: 7,
    padding: 8,
    margin: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  }
})
