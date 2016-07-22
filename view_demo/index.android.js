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
  Navigator,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';

const Header = require('./header');
const TextInputDemo = require('./app/inputtext');
const PickerDemo = require('./app/picker');
const ProgressBarDemo = require('./app/progressbar');
const DrawerLayoutDemo = require('./app/drawerlayout');
const ViewPagerDemo = require('./app/viewpager');

class NavigatorDemo extends Component{
  render(){
    let defaultName='firstName';
    let defaultComponent = view_demo;
    return(
      <Navigator
        initialRoute={{name:defaultName,component:defaultComponent}}
        // configureScene={
        //   (route,navigator) => {
        //     return Navigator.SceneConfigs.VerticalDownSwipeJump;
        //   }
        // }
        renderScene = {
          (route,navigator)=>{
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
          }
        }
      />
    );
  }
}

class view_demo extends Component {

  constructor(props){
    super(props);
    this.state={};
  }

  _pressBotton(){
    const {navigator} = this.props;
    if(navigator){
      navigator.push({
        name:'detail',
        component:Detail,
      });
    }
  }

_pressTextInput(){
  const {navigator} = this.props;
  if(navigator){
    navigator.push({
      name:'textinputdemo',
      component:TextInputDemo,
    });
  }
}

_click(title){
  ToastAndroid.show(title,ToastAndroid.SHORT);
}

  render() {
    return (
      <View style={styles.flex}>
        <Header/>
        <List title='第一行'></List>
        <List title='第二行'></List>
        <Text onPress={this._pressBotton.bind(this)}>点击</Text>
        <Text onPress={this._pressTextInput.bind(this)}> 查看 TextInput 例子</Text>
        <ImportantNews news={[
          '一',
          '二',
          '三'
        ]}></ImportantNews>

        <TouchableOpacity
          onPress={this._click.bind(this,"图片")}
          activeOpacity={0.7}>
          <Image
            source={{uri:'ic_launcher'}}
            style={{width:48,height:48}}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <TouchableHighlight onPress={this._click.bind(this,'酒店')}
            underlayColor="#f06292"
            style={[styles.item,styles.center]}>
                <Text style={styles.font}>酒店</Text>
          </TouchableHighlight>
          <View style={[styles.item,styles.lineLeftRight]}>
            <TouchableOpacity style={[styles.flex,styles.center,styles.lineBottom]}
              onPress={this._click.bind(this,'海外酒店')}
              activeOpacity={0.8}
              >
                <Text style={styles.font}>海外酒店</Text>
            </TouchableOpacity>
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
//列表
class List extends Component{
  render(){
    return (
      <View style={[styles.list_item]}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}
//今日新闻
class ImportantNews extends Component{
  show(title){
    // alert(title);
    ToastAndroid.show(title,ToastAndroid.SHORT);
  }
  render(){
    var news =[];
    for (var i in this.props.news) {
      var text = (
        <Text
          style={[styles.list_item]}
          onPress={this.show.bind(this,this.props.news[i])}
          key={i}
          >
        {this.props.news[i]}
        </Text>
      );
      news.push(text);
    }
    return (
      <View>
        <View style={{paddingLeft:20,backgroundColor:'red'}}>
          <Text>今日要闻</Text>
        </View>
        {news}
      </View>
    );
  }
}

class Detail extends Component{
  _back(){
    const {navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }
  render(){
    return (
      <View>
        <Header/>
        <Text onPress={this._back.bind(this)}>返回</Text>
        <Text>详情页</Text>
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
    // marginTop:200
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
  },
  list_item:{
    height:40,
    justifyContent:'center',
  }

});

AppRegistry.registerComponent('view_demo', () => ViewPagerDemo);
