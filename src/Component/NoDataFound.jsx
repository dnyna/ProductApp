import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Sizes from '../styles/Sizes';
import Borders from '../styles/Borders';
import Radius from '../styles/Radius';

const NoDataFound = () => {

  const navigation = useNavigation();
  const img = require("../Assets/No_data.jpg")

  return (
    <View style={styles.Bgr}>
      <Image source={img} style={styles.imgBgr} />

      <Text style={{ marginTop: 10 }}>
        No Data Found with this search
      </Text>

      
      <TouchableOpacity
        style={styles.btnBg}
        
       onPress={()=>navigation.navigate("Home")}

      >  
      
        <Text style={styles.btntxt}>Clear Parameter</Text>
      </TouchableOpacity>

    </View>
  )
}

export default NoDataFound

const styles = StyleSheet.create({
  imgBgr: {
    width: Sizes.FourCent,
    height: 800,
    resizeMode: 'contain'
  },

  Bgr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btntxt: {
    textAlign: 'center'
  },

  btnBg: {
    height:Sizes.small,
    width:Sizes.OneNHalf,
    justifyContent: 'center',
    borderWidth:Borders.OneNHalf,
    marginTop: 20,
    borderRadius:Radius.XXL
  }
})