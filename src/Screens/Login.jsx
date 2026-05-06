import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Color from '../styles/Colors'
import Sizes from '../../src/styles/Sizes'
import { useNavigation } from '@react-navigation/native'
import Boldness from '../styles/Boldness'
import ContinueWithFooter from '../Component/ContinueWithFooter'
import Padding from '../styles/Padding'
import Borders from '../styles/Borders'
import Radius from '../styles/Radius'
import Margins from '../styles/margin'
import AsyncStorage from '@react-native-async-storage/async-storage'
const App = () => {
  const Navigation = useNavigation()



  const Lock = require('../Assets/lock.png')
  const Eye = require('../Assets/eye.png')
  const userImg = require('../Assets/User.png')

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const getUserData = async ()=>{
    const data = await AsyncStorage.getItem('userData')
    console.log(data, 'data')
    // if(data){
    //   const parsedData = JSON.parse(data)
    //   console.log('parsedData', parsedData)
    // }
  }
  return (
    <View style={styles.container}>

      <View style={styles.welcomWrapper}>
        <Text style={styles.welcome}>Welcome
          <Text>          Back!
          </Text>
        </Text>
      </View>

      {/* <Voice/> */}

      <View>

        <View style={styles.inputWrapper}>
          <Image source={userImg} style={styles.UserIcon} />

          <TextInput
            style={styles.input}
            placeholder='Username or Email'
            placeholderTextColor={"#676767"}
            value={user}
            onChangeText={setUser}
          />
        </View>

        <View style={styles.PasswordWrapper}>
          <View style={styles.icons}>
            <Image source={Lock} style={styles.ImageIcon} />
            <Image source={Eye} style={styles.ShowHideIcon} />
          </View>

          <TextInput
            style={styles.PasswordInput}
            placeholder='Password'
            placeholderTextColor={'#676767'}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.forgotPassword} onPress={() => Navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotTxt}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

      </View>
      <View style={styles.loginWrapper}>
        <TouchableOpacity style={styles.loginBtn} onPress={getUserData()}>
          <Text style={styles.loginText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <ContinueWithFooter />

    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  welcome: {
    fontSize: Sizes.XXl,
    fontWeight: Boldness.L,
  },

  welcomWrapper: {

    paddingTop: Padding.Xl,
    paddingLeft: Padding.MM,

  },

  UserIcon: {
    position: 'absolute',
    left: Margins.marginForty,
    top: 52,

    zIndex: 1,
  },
  ImageIcon: {
    position: 'absolute',
    left: Margins.smaller,
    top: Margins.smallMarginTwenty

  },
  ShowHideIcon: {

    position: 'absolute',
    right: Margins.smallerSixteen,
    top: Margins.smallMarginTwenty

  },
  inputWrapper: {
    paddingTop: Padding.Ml,
    paddingRight: Padding.M,
    paddingLeft: Padding.MM,

  },

  input: {
    color: Color.blackClr,
    borderRadius: Radius.XXXXL,
    borderColor: Color.borderInputColor,
    borderWidth: Borders.s,
    backgroundColor: Color.inputColor,
    paddingTop: Padding.m,
    paddingBottom: Padding.m,
    paddingLeft: Padding.L,
  },

  PasswordWrapper: {
    paddingRight: Padding.M,
    // paddingBottom: Padding.,
    paddingTop: Padding.MM,
    paddingLeft: Padding.MM,


  },
  icons: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 1

  },
  PasswordInput: {
    color: Color.blackClr,
    paddingTop: Padding.m,
    paddingBottom: Padding.m,
    borderRadius: Radius.XXXXL,
    borderWidth: Borders.s,
    backgroundColor: Color.inputColor,
    paddingLeft: Padding.LL,
    borderColor: Color.borderInputColor,


  },
  forgotPassword: {
    paddingRight: 25,
    paddingLeft: 235,
    paddingBottom: 52,
    paddingTop: 9
  },
  forgotTxt: {
    color: Color.buttonColor,
    fontSize: 12,
    fontWeight: 400
  },


  loginBtn: {
    borderRadius: 4,
    backgroundColor: '#F83758',



  },
  loginWrapper: {
    paddingLeft: 29,
    paddingRight: 29,
  },
  loginText: {
    paddingTop: Padding.Middle,
    paddingBottom: Padding.Middle,
    fontSize: Sizes.Ml,
    fontWeight: 600,
    color: 'white',
    paddingLeft: 129,

  },




})