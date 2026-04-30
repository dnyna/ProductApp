import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContextData } from '../Context/CartContext';
import Color from '../styles/Colors';
import Sizes from '../styles/Sizes';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Padding from '../styles/Padding';
import Boldness from '../styles/Boldness';
import Borders from '../styles/Borders';
import Radius from '../styles/Radius';
import Gaps from '../styles/Gap';
import PaymentModal from '../Component/PaymentModal'
const Cart = () => {
  const Navigation = useNavigation();
  const [showModal, setShowModal] = useState(false)

  const { cartItems } = useContext(CartContextData);
  const BackArrow = require('../Assets/BackArrow.png');
  const favourite = require('../Assets/favourite.png')
  const ProceedPaymet = require('../Assets/ProdeedPayment.png')


  // console.log('cartItmes', cartItems)

  var TotalPrice = 0;
  cartItems.forEach(item => {
    TotalPrice += item.price * item.quantity
  });

  const { RemoveFromCart } = useContext(CartContextData)
  const { IncreaseQty } = useContext(CartContextData)
  const { DecreaseQty } = useContext(CartContextData)


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Navigation.goBack()}>
          <Image source={BackArrow} style={{ paddingTop: 2 }} />
        </TouchableOpacity>
        <Text style={styles.ShppingBag}>Shopping Bag</Text>
        <TouchableOpacity style={{ paddingTop: 4 }}>
          <Image source={favourite} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {cartItems.map((item, idx) => (
          <View key={idx} style={styles.mapView}>
            <View key={item.id} style={styles.product}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.textProduct}>
                <View style={styles.catDelWrapper}>
                  <Text style={styles.category}>{item.category}</Text>

                </View>
                <Text style={styles.title} numberOfLines={4} ellipsizeMode='tail'>{item.title}</Text>

                <View style={styles.qtyIncDecWrapper}>
                  <Text style={styles.txtFont}>Qty:</Text>
                  <View style={styles.incDecQty}>
                    <TouchableOpacity onPress={() => DecreaseQty(item.id)}><Text style={styles.txtFont}>-</Text></TouchableOpacity>
                    <Text style={styles.txtFont}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => IncreaseQty(item.id)}><Text style={styles.txtFont}>+</Text></TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={() => RemoveFromCart(item.id)} >
                    <IonIcons name='trash-outline' size={24} color={'red'}></IonIcons>
                  </TouchableOpacity>
                </View>

                <Text style={{ paddingTop: 8 }}>Price : ₹{item.price.toFixed(0) * item.quantity} </Text>
                <Text style={styles.deliveryDate}>Delivery by </Text>
              </View>
            </View>
          </View>

        ))}

        <View style={styles.mainOrderView}>

          <Text style={styles.orderDetailTxt}>Order Payment Details</Text>
          <View style={styles.OrderAmnt}>
            <Text>Order Amounts</Text>
            <Text>₹{TotalPrice.toFixed(0)}</Text>
          </View>

          <View style={styles.coupon}>
            <Text style={styles.conveniencetxt}>Convenience</Text>
            <TouchableOpacity><Text style={{ color: Color.buttonColor }}>Know more</Text></TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.AplyCupn}>Apply Coupon</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.deliveryFree}>
            <Text>Delivery Free</Text>
            <Text style={styles.freeTxt}>free</Text>
          </View>

        </View>
      </ScrollView>

      <View style={styles.ProceedPayments}>
        {/* <Text>Total: ₹{item.price * item.quantity}</Text> */}
        <View style={styles.ViewDetailsWrapper}>

          <View style={styles.ViewDtls}>
            <Text>₹{TotalPrice.toFixed(0)}</Text>
            <Text style={styles.detailTxt}>View Details</Text>
          </View>
          <TouchableOpacity onPress={() => setShowModal(true)} >
            <Image source={ProceedPaymet} style={styles.payBtn} />
          </TouchableOpacity>
        </View>

      </View>
      <PaymentModal showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    paddingBottom: Padding.century
  },

  header: {
    paddingTop: Padding.SE,
    flexWrap: 'wrap',
    flexDirection: 'row',
    // backgroundColor: Color.backGroundColor,
    justifyContent: 'space-between',
    paddingLeft: Padding.mm,
    paddingRight: Padding.K,
    paddingBottom:Padding.L
  },

  ShppingBag: {
    fontSize: Sizes.mm,
    fontWeight: Boldness.l,
  },

  mapView: {
    paddingLeft: 17,
    borderBottomWidth: Borders.m,
    borderColor: '#CACACA',
    elevation:1,
    backgroundColor:Color.backGroundColor
  },

  product: {
    flexDirection: 'row',

  },

  title: {
    paddingBottom: Padding.mS
  },

  qtyIncDecWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 15,
  },

  incDecQty: {
    flexDirection: 'row',
    gap: 16,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 3,
    backgroundColor: Color.backGroundColor
  },

  txtFont: {
    fontSize: 17
  },

  deliveryDate: {
    paddingTop: Padding.small
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
    gap: 50
  },

  category: {
    paddingBottom: Padding.mS,
    fontSize: Sizes.mm,
    fontWeight: Boldness.l,
  },

  mainOrderView: {
    paddingLeft: Padding.mm,
    paddingBottom: Padding.OOT,
    paddingTop: Padding.FF,
  },

  orderDetailTxt: {
    fontSize: Sizes.M,
    fontWeight: Boldness.M
  },

  OrderAmnt: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingTop: Padding.M,
    paddingRight: Padding.Middle
  },

  coupon: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Padding.small,
    paddingRight: Padding.Middle

  },

  conveniencetxt: {
    fontSize: Sizes.mm,
  },

  AplyCupn: {
    color: Color.buttonColor,
    fontSize: Sizes.s
  },

  deliveryFree: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Padding.small,
    paddingRight: Padding.B
  },

  freeTxt: {
    fontSize: Sizes.m,
    color: Color.buttonColor

  },
  ProceedPayments: {
    backgroundColor: 'white',
    position: 'absolute',
    top: Padding.Huge,
    borderTopStartRadius: Radius.TFOUR,
    borderTopEndRadius: Radius.TFOUR,
    borderColor: '#F8F8F8',
    paddingRight: 26
  },

  ViewDetailsWrapper: {
    paddingTop: Padding.X,
    paddingBottom: Padding.ll,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },

  ViewDtls: {
    fontweight: Boldness.l,
    paddingRight: Padding.MiddleT,
    paddingLeft: Padding.mm,
  },

  detailTxt: {
    fontSize: Sizes.s,
    fontWight: Boldness.l,
    color: Color.buttonColor
  },
  payBtn: {
  }



})