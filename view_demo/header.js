/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={[styles.container]}>
          <Text style={[styles.title]}>Title</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height:48,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    color:'#fff',
    fontSize:20
  }
});

module.exports=Header;
