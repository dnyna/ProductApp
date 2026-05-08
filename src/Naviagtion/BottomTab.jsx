import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, StyleSheet } from 'react-native'

import Home from '../Screens/Home'
import Cart from '../Screens/Cart'
import WishList from '../Screens/WishList'
import Icon from 'react-native-vector-icons/Ionicons'
import { CartContextData } from '../Context/CartContext'
import Padding from '../styles/Padding'
import Margins from '../styles/margin'
import Drawer from './Drawer'
import { WishContextData } from '../Context/WishListContext'
// import CartContext from '../Context/CartContext'
const Tab = createBottomTabNavigator()

const BottomTab = () => {
  const { cartItems } = useContext(CartContextData)
  const { wishItems } = useContext(WishContextData)
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#F83758',

      }} >

      {/* <Tab.Screen name='Drawer' component={Drawer}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (<Icon name="person-outline" size={size} color={color}></Icon>)
          }
        }} /> */}

      <Tab.Screen name='Home' component={Drawer}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            return (<Icon name="home-outline" size={size} color={color} focused></Icon>)

          }

        }}
      />
      <Tab.Screen name='Cart' component={Cart}
        options={{
          tabBarBadge: cartItems?.length > 0 ? cartItems.length : null,
          tabBarIcon: ({ size, color }) => {
            return (
              <View>
                <Icon name="cart-outline" size={size} color={color} style={styles.Container}></Icon>
                <Text style={styles.countTxt}>
                  {cartItems?.length}
                </Text>

              </View>
            )
          },

        }} />


      <Tab.Screen name='WishList' component={WishList}
        options={{
          tabBarBadge: wishItems?.length > 0 ? wishItems.length : null,
          tabBarIcon: ({ size, color }) => {
            return (
              <View>
                <Icon name="heart-outline" size={size} color={color} style={styles.Container}></Icon>
                <Text style={styles.countWishItems}>
                  {wishItems?.length}
                </Text>

              </View>
            )

          },

        }} />

    </Tab.Navigator>

  )
}


export default BottomTab;
const styles = StyleSheet.create(
  {
    Container: {
      top: 5,
      position: 'absolute'
    },
    countTxt: {
      paddingLeft: Padding.mm,
      color: 'red',
      paddingBottom: 13

    },
    countWishItems:
    {
      paddingLeft: Padding.mm,
      color: 'red',
      paddingBottom: 35

    }
  }
)

