import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Sala na Maandiko Matakatifu
        </Text>
        <Text style={styles.instructions}>
          Changes will be seen here

          I am running from this file
        </Text>
        <Text>
        This is a test if the emulator works
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
          Doesn't run from this file
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    flex:1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    flex:2,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
