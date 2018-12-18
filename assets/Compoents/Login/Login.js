import React from 'react';
import { StyleSheet, Text, View,Image ,TextInput} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
        <View style={{Flex:1,justifyContent:'center'}}>
 <Image  source={require('../Images/Logo.png')} style={{height: 100,width:100}} /> 
 <Text  style={styles.bigblue}>Welcome to login panel</Text>
 <TextInput 
    placeholderTextColor="#000"
   style={{height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 5}}
     style={styles.textDim2} placeholder="Username" />
    <TextInput 
    placeholderTextColor="#000" 
    style={{height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'white',

    margin: 5}} style={styles.textDim} placeholder="Password" />
</View>
    )
  }
}


const styles = StyleSheet.create({
    bigblue: {
  color: 'black',
      fontSize: 15,
      marginVertical:10,
    },

    textDim:{
        width:200,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
      

    },
    textDim2:{
        width:200,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        marginVertical:16,
        color:'#000000'
      

    }
  });