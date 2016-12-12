import React,{Component} from 'react';
import {Text, View, StyleSheet, ListView, ScrollView, AppRegistry, TextInput} from 'react-native';

export default class PrayersView extends Component{
  constructor(){
    super();
    this.state = {text:''};
  }

  render() {
    return (
      <View >
      <Text style={styles.header}>Sala za Kibahai</Text>
      <Text style={styles.detailheader}>Sala za Faradhi </Text>
      <Text style={styles.detail}>Sala za Faradhi</Text>
      <Text style={styles.detailheader}>{this.props.name}</Text>
      </View>
      );
  }
}
class PrayerCategoryHeader extends Component{
  render() {
    return (
      <Text style={styles.header}>Sala za Kibahai</Text>
    );
  }
}

class CategoryDetail extends Component{
  render() {
    return (
      <Text style={styles.detail}>{this.props.name}</Text>
    );
  }
}

class prayers extends Component{
  render() {
    return (
      <View>
        <PrayersView name="Sala za Kawaida"></PrayersView>
        <CategoryDetail name="Akiba" > </CategoryDetail>
        <CategoryDetail name="Asubuhi" > </CategoryDetail>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  header:{
    fontSize:22,
    backgroundColor:'steelblue',
    color:'white',
    textAlign:'center',
  },
  detailheader:{
   color:'gray',
   backgroundColor:'lightgray',
   padding:5,
   height:30,
 },
 detail:{
  padding:5,
  height:30,
  color:'black',
},
inputItem:{
}
});

AppRegistry.registerComponent('AwesomeProject', () => prayers);