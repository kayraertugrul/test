import React from 'react'
import { View, StyleSheet } from 'react-native'

const Ball = () => {
    return (
        <View style={styles.ball} >

        </View>
    )
}


const styles = StyleSheet.create({
    ball:{
        backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 20,


    }
})


export default Ball