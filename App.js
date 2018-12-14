import React from 'react';
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native';
import Logina from './assets/Compoents/Login/Login.js';
export default class App extends React.Component {
  render() {
    return (

    <View style={{flex: 1,justifyContent:'center',alignItems:'center',backgroundColor:"#969696"}} >
     <StatusBar />
      <Logina /> 
       
      </View>  
      
      
      );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    backgroundColor:'grey',
  },
  
});