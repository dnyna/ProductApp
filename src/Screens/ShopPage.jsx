import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Margins from '../styles/margin';
// import Color from '../styles/Colors';
import Sizes from '../styles/Sizes';
import Borders from '../styles/Borders'
import Radius from '../styles/Radius';
import { CartContextData } from '../Context/CartContext'
import { useContext } from 'react';
import Padding from '../styles/Padding';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Gaps from '../styles/Gap';
import Boldness from '../styles/Boldness';
// import AsyncStorage from '@react-native-async-storage/async-storage'
const ShopPage = ({ route }) => {

  const Navigation = useNavigation()
  const { selctedProduct } = route.params;

  const { AddToCart } = useContext(CartContextData)

  const vip = require('../Assets/vip.png')
  const nearestStore = require('../Assets/nearestStore.png')
  const returnPloicy = require('../Assets/returnPloicy.png')
  const cartImg = require('../Assets/cartImg.png')

  // const Data = async()=>{
  //   await AsyncStorage.getItem('productLists')
  // }
  // console.log(Data)
  return (
    <View style={styles.WishListContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Navigation.goBack()} style={styles.ion}>
          <IonIcons name="chevron-back-outline" size={25}></IonIcons>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartImage}>
          <IonIcons name="cart-outline" size={32}></IonIcons>
        </TouchableOpacity>
      </View>

      <View>
        <Image
          source={{ uri: selctedProduct.image }}
          style={styles.productImage} />
      </View>

      <View style={styles.productDetails}>
        <View>
          <Text style={styles.title}>
            {selctedProduct.title}
          </Text>

          <Text style={styles.pricing}>
            ₹ {selctedProduct.price}
          </Text>

          <Text numberOfLines={1} style={{ paddingTop: Padding.mS }}>
            ⭐ {selctedProduct.rating?.rate} ({selctedProduct.rating?.count})
          </Text>

          <Text style={{ fontSize: Sizes.m, fontWeight: Boldness.M, paddingTop: 8 }}> Product Details</Text>
          <Text numberOfLines={3}>
            {selctedProduct.description}...
          </Text>
        </View>

        <View style={styles.bottomImg}>
          <Image source={nearestStore} />
          <Image source={vip} />
          <Image source={returnPloicy} />
        </View>
      </View>

      <View style={styles.BtnWrapper}>
        <TouchableOpacity
          style={styles.ADDCartBtn}
          onPress={() => AddToCart(selctedProduct)}
        >
          <Image source={cartImg} style={{ Size: Sizes.middle }} />
          <Text style={styles.AddCrtTxt}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

export default ShopPage;

const styles = StyleSheet.create({

  header: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: Padding.X,
    justifyContent: 'space-between'
  },
  ion: {
    paddingTop: Padding.B,
    paddingLeft: Padding.mm,
    padddingBottom: Padding.B
  },
  cartImage: {
    paddingTop: Padding.smallT,
    paddingBottom: Padding.smallT,
    paddingRight: Padding.smallOne
  },

  productDetails: {
    paddingLeft: Padding.Middle,
    paddingRight: Padding.Middle,
    paddingTop: Padding.Middle
  },

  title: {
    fontSize: Sizes.mm,
    fontWeight: Boldness.l
  },
  pricing: {
    paddingTop: Padding.mS
  },

  bottomImg: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: Gaps.A,
    paddingTop: Padding.mS,
    paddingBottom: Padding.mS,
  },
  BtnWrapper: {
    paddingLeft: Padding.Middle
  },

  ADDCartBtn: {

    flexWrap: 'wrap',
    flexDirection: 'row',
    borderWidth: Borders.s,
    borderRadius: Radius.XXXXXL,
    backgroundColor: '#3F92FF',
    height: Sizes.Xl,
    width: Sizes.sizeOTSix,
  },

  productImage: {
    height: Sizes.sizeTOT,
    width: Sizes.largest,
    paddingTop: Padding.Middle,
    resizeMode: 'contain',
    borderRadius: Padding.Middle,
  },
  AddCrtTxt: {
    paddingTop: Padding.s,
    paddingLeft: Padding.mS
  }
});
