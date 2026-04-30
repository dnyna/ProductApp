import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Sizes from '../styles/Sizes'
import Margins from '../styles/margin'
import Color from '../styles/Colors'
import Boldness from '../styles/Boldness'
import Borders from '../styles/Borders'
import Radius from '../styles/Radius'
import Padding from '../styles/Padding'

const ForgotPassword = () => {

  const MailIcon = require('../Assets/Mail.png')
  return (
    <View style={styles.container}>
      <View style={styles.ForgotView}>
        <Image source={MailIcon} style={styles.mailIcon} />
        <Text style={styles.forgotTxt}>Forgot{'           '}Password?</Text>
        <View style={styles.TxtInputWrapper}>
          <TextInput
            placeholder='Enter your email address'
            placeholderTextColor={'#676767'}
            style={styles.email}
          />
        </View>

        <Text style={styles.txt}>* We will send you a message to set or reset                                               your new password</Text>
      </View>
      <View>

      </View>
      <View style={styles.SubmitView}>
        <TouchableOpacity style={styles.submit}>

          <Text style={styles.SubmitTxt}>Submit</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({

  container: {
    paddingLeft: Padding.K,
    paddingRight: Padding.K,
  },

  ForgotView: {
    paddingTop: Padding.Xl,
  },

  forgotTxt: {
    fontSize: Sizes.XXl,
    fontWeight: Boldness.L
  },

  TxtInputWrapper: {
    paddingTop: Padding.MM
  },

  email: {
        color: Color.blackClr,
    borderWidth: Borders.s,
    borderRadius: Radius.XXXXL,
    paddingTop: Padding.mm,
    paddingBottom: Padding.B,
    borderColor:Color.borderInputColor,
    paddingLeft:Padding.X

  },
  txt: {
    fontSize: Sizes.s,
    paddingTop: Padding.M,
    fontWeight: Boldness.m
  },

  SubmitView: {
    paddingTop: Padding.MM
  },

  submit: {
    borderRadius: Radius.S,
    backgroundColor: Color.buttonColor,
  
  },
  SubmitTxt: {
    color: Color.bgColor,
    fontSize: Sizes.Ml,
    paddingTop: Padding.Middle,
    paddingBottom: Padding.Middle,
    paddingLeft:Padding.XXXL
  },
  mailIcon: {
    position: 'absolute',
    top: Margins.MarginTZSix,
    left: Margins.smallestMargin
  }
})