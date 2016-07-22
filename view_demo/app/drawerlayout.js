import React,{Component} from 'react';
import{
  StyleSheet,
  View,
  Text,
  DrawerLayoutAndroid,
  ToastAndroid,
} from 'react-native';

class DrawerLayoutDemo extends Component{
  _drawerClose(){
    ToastAndroid.show("关闭",ToastAndroid.SHORT);
  }

  _drawerOpen(){
    ToastAndroid.show("打开",ToastAndroid.SHORT);
  }

  _drawerStateChanged(state){
    ToastAndroid.show(state,ToastAndroid.SHORT);
  }
  render(){
    let navigationView = (
      <View>
        <Text>I m in the Drawer!!</Text>
      </View>
    );
    return(
      <DrawerLayoutAndroid
        drawerWidth = {300}
        drawerPosition= {DrawerLayoutAndroid.positions.Left}
        renderNavigationView={ () => navigationView}
        onDrawerClose = {this._drawerClose.bind(this)}
        onDrawerOpen ={this._drawerOpen.bind(this)}
        onDrawerStateChanged = {this._drawerStateChanged.bind(this)}
        >
        <View>
          <Text>Hello</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

module.exports = DrawerLayoutDemo;
