import React,{Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  ProgressBarAndroid,
} from 'react-native';

var TimerMixin = require('react-timer-mixin');
var MovingBar = React.createClass({
  mixins:[TimerMixin],
  getInitialState:function(){
    return {
      progress:0
    };
  },

  componentDidMount:function(){
    this.setInterval(
      ()=>{
        var progress = (this.state.progress+0.02)%1;
        this.setState({progress:progress});
      },50
    );
  },

  render:function(){
    return <ProgressBarAndroid progress={this.state.progress}{...this.props}/>;
  }
});

class ProgressBarDemo extends Component{
  render(){
    return(
      <View>
        <Text style={styles.title}>ProgressBar 例子</Text>
        <ProgressBarAndroid styleAttr="Small"/>
        <ProgressBarAndroid styleAttr="Large"/>
        <ProgressBarAndroid styleAttr="Large" color="red"/>
        <ProgressBarAndroid styleAttr="Inverse"/>
        <ProgressBarAndroid styleAttr="SmallInverse"/>
        <ProgressBarAndroid styleAttr="LargeInverse"/>
        <ProgressBarAndroid styleAttr="Horizontal"/>
        <MovingBar styleAttr="Horizontal" indeterminate={false}/>
        <MovingBar styleAttr="Horizontal" indeterminate={false} color="red"/>
        
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title:{
    height:48,
    justifyContent:'center',
    alignItems:'center',
  }
});

module.exports = ProgressBarDemo;
