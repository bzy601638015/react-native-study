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
  View
} from 'react-native';
var ToolbarAndroid =require('ToolbarAndroid');
class toolbarandroid_demo extends Component {
  render() {
    return (
        <View style = {styles.container}>
          <ToolbarAndroid
              title = "Hello World"
              actions = {[{title:'Settings',icon:require('image!ic_menu_black_24dp'),show:'always'}]}
              logo={require('image!ic_menu_black_24dp')}
              style = {styles.toolbar}
              onActionSelected={this.onActionSelected}
          />
          <Text> 标题 </Text>
          <ToolbarAndroid
            style = {styles.toolbar}>
            <Text> 标题 </Text>
          </ToolbarAndroid>
        </View>
    );
  }

  onActionSelected(position) {
    if (position === 0) { // index of 'Settings'

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar:{
    backgroundColor:'#e9eaed',
    height:56,
    width:400
  }
});

AppRegistry.registerComponent('toolbarandroid_demo', () => toolbarandroid_demo);
