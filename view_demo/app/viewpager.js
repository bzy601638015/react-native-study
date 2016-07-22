import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ViewPagerAndroid,
} from 'react-native';

class ViewPagerDemo extends Component{
  render(){
    return (
      <ViewPagerAndroid
        initialPage={0}
        style ={{flex:1}}
        >
        <View style={styles.pageStyle}>
          <Text>First page</Text>
        </View>
        <View style={styles.pageTwo}>
          <Text>Second page</Text>
        </View>
      </ViewPagerAndroid>
    );
  }
}

var styles ={
  pageStyle:{
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    backgroundColor:'red'
  },
  pageTwo:{
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  }
}

module.exports = ViewPagerDemo;
