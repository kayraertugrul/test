import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Ball from '../stuffs/Ball';

const MainPage = () => {
  return(
    <View style={styles.container}>
      <Ball />
      <Text style={styles.text}>merhaba</Text>
      <Button 
        color='blue'
        title='press me'
        onPress={() =>{
          console.log('bastim')
        }}
      />
    </View>
  )};



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center'
  },
  text:{
    color: 'green',
    fontSize: 30,
    margin: 20,
  },


});


export default MainPage
