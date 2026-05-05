

import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import {CartContextData}from '../Context/CartContext'
import { useContext } from 'react'
const Search = () => {
  const{wishItems} = useContext(CartContextData);
  return (
    <View>
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

                <Text style={styles.pricing}>Price : ₹{item.price.toFixed(0) * item.quantity} </Text>
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
    </View>
  )
}

export default Search

const styles = StyleSheet.create({

})