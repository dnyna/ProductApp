import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import Sizes from '../styles/Sizes'

const LoadingPage = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size={30} color={"#2c022a"} />
      <Text style={styles.loadingTxt}> ........loading page..Wait a little bit</Text>
    </View>
  )
}

export default LoadingPage

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  loadingTxt: {
    color: '#21070c',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: Sizes.m
  }
})
