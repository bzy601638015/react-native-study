/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 var MOCKED_MOVIES_DATA = [
   {title:'标题',year:'2015',posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}},
 ];
 var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';

class react_demo extends Component {

  constructor(props){
    super(props);
    this.state ={
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1,row2)=> row1 !== row2,
      }),
      loaded:false,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
          loaded:true,
        });
    })
    .done();
  }

  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderMovie}
        style = {styles.listview}
      />
    );
  }

  renderLoadingView(){
      return (
        <View style={styles.container}>
          <Text>
            正在加载电影数据......
          </Text>
        </View>
      );
    }

    renderMovie(movie){
      return (
        <TouchableHighlight>
        <View>
          <View style={styles.row}>
             <Image
                source = {{uri:movie.posters.thumbnail}}
                style = {styles.thumbnail}/>
              <View style={styles.rightContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.year}>{movie.year}</Text>
              </View>
            </View>
            <View style = {styles.separator} />
        </View>
        </TouchableHighlight>
      );
     }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'
  },
  thumbnail:{
    width:53,
    height:81,
  },
  rightContainer:{
    flex:1,
    //backgroundColor:'red'
  },
  title:{
    fontSize:20,
    marginBottom:8,
    textAlign:'center'
  },
  year:{
    textAlign:'center'
  },
  listview:{
    paddingTop:20,
    backgroundColor:'#F5FCFF'
  },
  row:{
    flex:1,
    padding:5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  separator: {
    height: 1,
    backgroundColor: 'red',
  },
});

AppRegistry.registerComponent('react_demo', () => react_demo);
