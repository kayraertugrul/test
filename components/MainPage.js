import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ball from './stuff/Ball';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Ball />
      <TouchableOpacity 
        style={styles.button}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'grey',
    width: 65,
    height: 30,
    alignItems: 'center',
    margin: 20
  },
  text: {
    color: 'red'
  }

});


export default MainPage
