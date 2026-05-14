

import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { WishContextData } from '../Context/WishListContext'
import { useContext } from 'react'
import Color from '../styles/Colors'
import Padding from '../styles/Padding'
import Sizes from '../styles/Sizes'
import Gaps from '../styles/Gap'
import Borders from '../styles/Borders'
import Boldness from '../styles/Boldness'
import { ThemeToggleContex } from '../Context/ThemeContext'
const WishList = () => {
  const { wishItems } = useContext(WishContextData);
  const { RemoveFromWishList } = useContext(WishContextData) // to remove the cart item using the context
  const { GreyTheme } = useContext(ThemeToggleContex)
  console.log(wishItems, 'wishItems')
  return (
    <View style={[{ backgroundColor: GreyTheme.backgroundColor, paddingTop: 63 }]}>
      <Text style={[styles.heading, { color: GreyTheme.color }]}>WishList</Text>
      <ScrollView>
        {wishItems.map((item, idx) => (
          <View key={idx} style={[styles.mapView, { backgroundColor: GreyTheme.backgroundColor }]}>
            <View key={item.id} style={styles.product}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.textProduct}>
                <View style={styles.catDelWrapper}>
                  <Text style={[styles.category, { color: GreyTheme.color }]}>{item.category}</Text>

                </View>
                <Text style={[styles.title, { color: GreyTheme.color }]} numberOfLines={4} ellipsizeMode='tail'>{item.title}</Text>

                <View style={styles.qtyIncDecWrapper}>
                  <Text style={[styles.pricing, { color: GreyTheme.color }]}>Price : ₹{item.price.toFixed(0)} </Text>

                  <TouchableOpacity onPress={() => RemoveFromWishList(item.id)} >
                    <IonIcons name='trash-outline' size={24} color={'red'}></IonIcons>
                  </TouchableOpacity>

                </View>

              </View>
            </View>
          </View>

        ))}

      </ScrollView>
    </View>
  )
}

export default WishList

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 700,
    paddingBottom: 20
  },
  mapView: {
    paddingLeft: Padding.Mm,
    borderBottomWidth: Borders.m,
    borderColor: '#CACACA',
    elevation: 1,
    backgroundColor: Color.backGroundColor
  },
  product: {
    flexDirection: 'row',

  },
  productImage: {
    height: Sizes.oFTT,
    width: Sizes.largeOTF,
    resizeMode: 'contain'
  },
  textProduct: {
    paddingLeft: Padding.mm,
    paddingTop: Padding.mS,
    paddingBottom: Padding.Middle,

  },

  catDelWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: Gaps.L
  },
  category: {
    paddingBottom: Padding.mS,
    fontSize: Sizes.mm,
    fontWeight: Boldness.l,
  },
  pricing: {
    paddingTop: Padding.mS
  },
  qtyIncDecWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: Gaps.C,
  },
  title: {
    paddingBottom: Padding.mS
  },



})