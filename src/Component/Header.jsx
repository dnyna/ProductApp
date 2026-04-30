import { StyleSheet, TouchableOpacity, View, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import Sizes from '../styles/Sizes'
import Margins from '../styles/margin'
import Padding from '../styles/Padding'
const Header = () => {


  const ProfilePicture = require('../Assets/profilePicture.png')
  const LeftIcon = require('../Assets/leftIcon.png')
  const StylishLogo = require('../Assets/StylishLogo.png')
  return (

    <View style={styles.container}>
      <View style={styles.headerContent}>
        <TouchableOpacity style={{ paddingTop: 8, paddingBottom: 12 }}>
          <Image source={ProfilePicture} style={styles.profileImg} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingTop: 12, paddingBottom: 12 }}>
          <Image source={StylishLogo} />
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingTop: 12, paddingBottom: 12 }}>
          <Image source={LeftIcon} style={styles.LeftIconImg} />
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingTop: Padding.X,
    paddingHorizontal: Padding.Middle,


  },
  headerContent: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },


})