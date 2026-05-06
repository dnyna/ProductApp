import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Screens/Login'
import CreateAccount from '../Screens/CreateAccount'
import ForgotPassword from '../Screens/ForgotPassword'
import GetStarted from '../Screens/GetStarted'
import ShopPage from '../Screens/ShopPage'
import Cart from '../Screens/Cart'
import BottomTab from './BottomTab'
const Stack = createStackNavigator()
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Login' component={Login}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name='CreateAccount' component={CreateAccount}
          options={{
          headerShown:false
        }}
        />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}
          options={{
          headerShown:false
        }}

        />
        <Stack.Screen name='GetStarted' component={GetStarted}
          options={{
          headerShown:false
        }}
        />
        <Stack.Screen name='MainTab' component={BottomTab}
        />

        <Stack.Screen name='ShopPage' component={ShopPage} 
          options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Cart' component={Cart}
          options={{
          headerShown:false
        }}
        />
       
      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default Navigator;


