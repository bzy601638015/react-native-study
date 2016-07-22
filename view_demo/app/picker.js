import React,{Component} from 'react';

import{
  StyleSheet,
  View,
  TextInput,
  Text,
  Picker,
} from 'react-native';

class PickerDemo extends Component{
  constructor(props){
    super(props);
    this.state ={
      language:'',
    };
  }
  render(){
    return(
      <View>
      <View style={[styles.title]}>
        <Text>Picker 案例</Text>
      </View>
        <Picker
          selectedValue = {this.state.language}
          onValueChange = {(lang)=>this.setState({language:lang})}
          prompt = "请选择"
          >
            <Picker.Item label="java" value='java'/>
            <Picker.Item label="javascript" value="js"/>
        </Picker>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title:{
    height:48,
    justifyContent:'center',//垂直
    alignItems:'center',//水平
  },
});

module.exports = PickerDemo;
