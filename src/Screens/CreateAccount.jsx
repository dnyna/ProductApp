import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import React from 'react'
import Color from '../styles/Colors'
import Sizes from '../../src/styles/Sizes'
import Margins from '../styles/margin'
import Boldness from '../styles/Boldness'
import Radius from '../styles/Radius'
import Borders from '../styles/Borders'
import zIndex from '../styles/zIndex'
import { useNavigation } from '@react-navigation/native'
import Padding from '../styles/Padding'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const App = () => {
  const Navigation = useNavigation()
  const GoogleImg = require('../Assets/Buttons.png')
  const Lock = require('../Assets/lock.png')
  const Eye = require('../Assets/eye.png')
  const userImg = require('../Assets/User.png')

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')


  const handleSignUp = async () => {
    if (!user.trim() || !password.trim() || !confPassword.trim()) //.trim() is used for rrmoing extra space from staringand he end of the string
       {
      Alert.alert('enter username and password')
          return

    }

    try {
      const userData = {
        username: user,
        password: password,
        condfirmPassword: confPassword
      }

      await AsyncStorage.setItem('userData', JSON.stringify('userData',userData))
      console.log(userData, 'userData')
      Alert.alert('CREATED ACCOUNT SUCCESSFULLY')

      setUser('')
      setPassword('')
      setConfPassword('')
      Navigation.navigate('Login')
    } catch (error) {
      console.log(error, 'error');

    }

  }
  return (
    <View style={styles.container}>

      <View style={styles.welcomWrapper}>
        <Text style={styles.welcome}>Create an           account

        </Text>
      </View>

      <View>
        <Image source={userImg} style={styles.UserIcon} />
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder='Username or Email' placeholderTextColor={'#A8A8A9'} value={user} onChangeText={setUser} />
        </View>

        <View style={styles.passWordWrapper}>
          <Image source={Lock} style={styles.ImageIcon} />
          <TextInput style={styles.PasswordInput} placeholder='Password' placeholderTextColor={'#676767'} value={password} onChangeText={setPassword} />
          <Image source={Eye} style={styles.ShowHideIcon} />
        </View>

        <View style={styles.ConfPass}>
          <Image source={Lock} style={styles.ImageIcon} />
          <TextInput style={styles.ConfirmPassword} placeholder='Confirm Password' placeholderTextColor={'#A8A8A9'} value={confPassword} onChangeText={setConfPassword} />
          <Image source={Eye} style={styles.ShowHideIcon} />
        </View>

        <Text style={styles.registerTxt}>By clicking the Register button, you agree                            to the public offer</Text>

      </View>


      <View style={styles.Btns}>
        <TouchableOpacity style={styles.CreateBtn} onPress={ handleSignUp}>
          < Text style={styles.CreateAccText}>
            Create An Account
          </Text>
        </TouchableOpacity>
      </View>


      <View style={styles.ContinueWithContainer}>
        <View style={styles.contnueWith}>
          <Text style={styles.ContinueWithTxt}>- OR Continue with -</Text>

          <View style={styles.footerButton}>
            <Image source={GoogleImg} />
          </View>
          <View style={styles.alereadyAxccTxtWrapper}>

            <Text style={styles.alereadyAxccTxt}> I have already an account  </Text>

            <TouchableOpacity onPress={() => Navigation.navigate('Login')}>
              <Text style={styles.LogIn}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    paddingLeft: Padding.K,
    paddingRight: Padding.K,
  },

  welcome: {
    fontSize: Sizes.XXl,
    fontWeight: Boldness.L,
  },

  welcomWrapper: {
    paddingTop: Padding.Xl,
    paddingBottom: Padding.MM
  },

  UserIcon: {
    position: 'absolute',
    left: Margins.smallTen,
    top: Margins.smallerSixteen,
    zIndex: zIndex.A,
  },

  ImageIcon: {
    position: 'absolute',
    left: Margins.smaller,
    top: Margins.smallMarginTwenty,
    zIndex: zIndex.A,
  },

  ShowHideIcon: {
    position: 'absolute',
    right: Margins.smallerSeventeen,
    top: Margins.smallMarginTwenty,
    zIndex: zIndex.A,
  },

  inputWrapper: {
    paddingBottom: Padding.MM
  },
  input: {
    color: Color.blackClr,

    borderRadius: Radius.XXXXL,
    borderWidth: Borders.s,
    backgroundColor: Color.inputColor,
    borderColor: Color.borderInputColor,
    paddingLeft: Padding.L,
    paddingTop: Padding.m,
    paddingBottom: Padding.m

  },

  passWordWrapper: {
    paddingBottom: Padding.MM

  },

  PasswordInput: {
    color: Color.blackClr,
    borderRadius: Radius.XXXXL,
    borderWidth: Borders.s,
    backgroundColor: Color.inputColor,
    borderColor: Color.borderInputColor,
    paddingLeft: Padding.LL,
    paddingTop: Padding.m,
    paddingBottom: Padding.m,

  },

  ConfPass: {
    paddingBottom: Padding.m
  },

  ConfirmPassword: {
    color: Color.blackClr,
    borderRadius: Radius.XXXXL,
    borderWidth: Borders.s,
    backgroundColor: Color.inputColor,
    borderColor: Color.borderInputColor,
    paddingLeft: Padding.LL,
    paddingTop: Padding.m,
    paddingBottom: Padding.m,
  },

  registerTxt: {
    fontStyle: 'Montserrat',
    fontSize: Sizes.s
  },

  Btns: {
    paddingTop: Padding.L,
    paddingBottom: Padding.l
  },

  CreateBtn: {

    borderRadius: Radius.S,
    backgroundColor: Color.buttonColor,
  },
  CreateAccText: {
    paddingLeft: Padding.XxL,
    paddingRight: Padding.XxL,
    paddingTop: Padding.Middle,
    paddingBottom: Padding.Middle,
    color: 'white',
    fontWeight: Boldness.l

  },

  contnueWith: {
    alignItems: 'center',
  },

  ContinueWithTxt: {
    fontSize: Sizes.M
  },

  footerButton: {
    paddingTop: Padding.m
  },

  alereadyAxccTxtWrapper: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingTop: Padding.K
  },

  alereadyAxccTxt: {
    fontSize: Sizes.m
  },

  LogIn: {
    color: Color.buttonColor,
    textDecorationLine: 'underline'
  }

})