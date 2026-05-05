import { StyleSheet, TouchableOpacity, View, Image, } from 'react-native'

import Padding from '../styles/Padding'

import { useNavigation } from '@react-navigation/native'
const Header = () => {


  const ProfilePicture = require('../Assets/profilePicture.png')
  const LeftIcon = require('../Assets/leftIcon.png')
  const StylishLogo = require('../Assets/StylishLogo.png')
  const navigation = useNavigation()
  return (

    <View style={styles.container}>
      <View style={styles.headerContent}>
        <TouchableOpacity style={styles.ProfileContainer}>
          <Image source={ProfilePicture}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.StylishLogoWrapper}>
          <Image source={StylishLogo} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.LeftIconWrapper} onPress={() => navigation.openDrawer()}>
          <Image source={LeftIcon}/>
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

  ProfileContainer: {
    paddingTop: Padding.mS,
    paddingBottom: Padding.smallT
  },

  StylishLogoWrapper: {
    paddingTop: Padding.smallT,
    paddingBottom: Padding.smallT
  },

  LeftIconWrapper: {
    paddingTop: Padding.smallT,
    paddingBottom: Padding.smallT
  }

})