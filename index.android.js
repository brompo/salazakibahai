import React,{Component} from 'react';
import {Text, View, StyleSheet, ListView, AppRegistry} from 'react-native';

export default class ListViewDemo extends Component{
  render() {
    return (
      <View>
      <Text style={styles.header}>There we go</Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  header:{
    fontsize:20,
  }
});

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);