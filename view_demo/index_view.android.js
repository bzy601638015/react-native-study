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

class view_demo extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.container}>
          <View style={[styles.item,styles.center]}>
            <Text style={styles.font}>酒店</Text>
          </View>
          <View style={[styles.item,styles.lineLeftRight]}>
            <View style={[styles.flex,styles.center,styles.lineBottom]}>
              <Text style={styles.font}>海外酒店</Text>
            </View>
            <View style={[styles.flex,styles.center]}>
              <Text style={styles.font}>特惠酒店</Text>
            </View>
          </View>
          <View style={[styles.item]}>
            <View style={[styles.flex,styles.center,styles.lineBottom]}>
              <Text style={styles.font}>团购</Text>
            </View>
            <View style={[styles.flex,styles.center]}>
              <Text style={styles.font}>客栈／公寓</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:84,
    backgroundColor: '#ff0067',
    borderWidth:1,
    borderColor:'red',
    flexDirection:'row',
    borderRadius:5,
    padding:2,
    marginLeft:5,
    marginRight:5,
    marginTop:200
  },
  item:{
    flex:1,
    height:80
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  flex:{
    flex:1
  },
  font:{
    fontWeight:'bold',
    fontSize:16,
    color:'#fff'
  },
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#fff'
  },
  lineBottom:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff'
  }
});

AppRegistry.registerComponent('view_demo', () => view_demo);
