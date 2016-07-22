import React,{Component} from 'react';

import{
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';

class TextInputDemo extends Component{
  constructor(props){
    super(props);
    this.state={
      curText: '<No Event>',
      prevText: '<No Event>',
      prev2Text: '<No Event>',
    };
  }
  updateText(text){
    this.setState((state)=>{
      return {
      curText:text,
      prevText:state.curText,
      prev2Text:state.prevText,
    }
    });
  }
  render(){
    return(
      <View >
        <View style={[styles.title]}>
          <Text>TextInput 案例</Text>
        </View>

        <TextInput
          autoCapitalize="none"
          placeholder="Enter text to see events"
          autoCorrect = {false}
          onFocus = {()=>this.updateText('onFocus')}
          onBlur = {()=>this.updateText('onBlur')}
          onChange = {(event)=>this.updateText('onChange text:'+event.nativeEvent.text)}
          onEndEditing = {(event)=>this.updateText('onEndEditing text:'+event.nativeEvent.text)}
          onSubmitEditing ={(event)=>this.updateText('onSubmitEditing text:'+event.nativeEvent.text)}
          style={styles.singleLine}
          keyboardType="email-address"//numeric
          returnKeyType="send"
          />
          <Text style={styles.eventLabel}>
          {this.state.curText}{'\n'}
          (prev: {this.state.prevText}){'\n'}
          (prev2: {this.state.prev2Text})
        </Text>

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
  inputStyle:{
    height:40,
    borderColor:'red',
    borderWidth:1,
    justifyContent:'center'
  },
  eventLabel: {
    margin: 3,
    fontSize: 12,
  },
  singleLine: {
    fontSize: 16,
    padding: 4,
  },
});

module.exports=TextInputDemo;
