import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, StyleSheet } from 'react-native'

import Home from '../Screens/Home'
import Cart from '../Screens/Cart'
import Search from '../Screens/Search'
import Icon from 'react-native-vector-icons/Ionicons'
import { CartContextData } from '../Context/CartContext'
import Padding from '../styles/Padding'
import Margins from '../styles/margin'
import Drawer from './Drawer'
// import CartContext from '../Context/CartContext'
const Tab = createBottomTabNavigator()

const BottomTab = () => {
  const { cartItems } = useContext(CartContextData)

  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#F83758'
      }} >

      {/* <Tab.Screen name='Drawer' component={Drawer}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (<Icon name="person-outline" size={size} color={color}></Icon>)
          }
        }} /> */}

      <Tab.Screen name='Home' component={Drawer}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (<Icon name="home-outline" size={size} color={color}></Icon>)

          }

        }}
      />
      <Tab.Screen name='Cart' component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <View>
                <Icon name="cart-outline" size={size} color={color} style={styles.Container}></Icon>
                <View>
                  <Text style={styles.countTxt}>
                    {cartItems?.length}
                  </Text>
                </View>

              </View>
            )

          },
          // tabBarBadge: cartItems?.length > 0 ? cartItems.length : null,



          // tabBarBadge
        }} />
      <Tab.Screen name='Profile' component={Search}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (<Icon name="person-outline" size={size} color={color}></Icon>)
          }
        }} />

    </Tab.Navigator>

  )
}


export default BottomTab;
const styles = StyleSheet.create(
  {
    Container: {
      position: 'absolute',
      left: Margins.ToosmallMargin
    },
    countTxt: {
      paddingLeft: Padding.mm,
      color: 'red',
      paddingBottom: Padding.small
    }
  }
)

