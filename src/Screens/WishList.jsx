

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
const WishList = () => {
  const { wishItems } = useContext(WishContextData);
  const { RemoveFromWishList } = useContext(WishContextData) // to remove the cart item using the context

  console.log(wishItems, 'wishItems')
  return (
    <View style={{ paddingTop: 63 }}>
      <ScrollView>
        {wishItems.map((item, idx) => (
          <View key={idx} style={styles.mapView}>
            <View key={item.id} style={styles.product}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.textProduct}>
                <View style={styles.catDelWrapper}>
                  <Text style={styles.category}>{item.category}</Text>

                </View>
                <Text style={styles.title} numberOfLines={4} ellipsizeMode='tail'>{item.title}</Text>

                <View style={styles.qtyIncDecWrapper}>
                  <Text style={styles.pricing}>Price : ₹{item.price.toFixed(0)} </Text>

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