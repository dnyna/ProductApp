import { Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Screens/Home'
import Cart from '../Screens/Cart'
import WishList from '../Screens/WishList'
import HelpCenter from '../Screens/HelpCenter'
import IonIcons from 'react-native-vector-icons/Ionicons'
import CustomDrawer from '../Component/CustomDrawer'
import { NavigationContainer } from '@react-navigation/native'
const Drawers = createDrawerNavigator();
 
const Drawer = () => {
    return (
        <Drawers.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawers.Screen name='Home' component={Home}
                options={ 
                    {
                        headerShown: false,
                        drawerIcon: ({ color }) => (
                            <IonIcons name='home-outline' size={22} color={color} />
                        )
                    }
                } />

            <Drawers.Screen name='Cart' component={Cart}
                options={
                    {
                        headerShown: false,
                        drawerIcon: ({ color }) => (
                            <IonIcons name='cart-outline' size={22} color={color} />
                        )
                    }
                } />

            <Drawers.Screen name='WishList' component={WishList}
                options={
                    {
                        headerShown: false,
                        drawerIcon: ({ color }) => (
                            <IonIcons name='heart-outline' size={22} color={color} />
                        )
                    }
                } />

            <Drawers.Screen name='HelpCenter' component={HelpCenter} 
                options={
                    {
                        headerShown: false,
                        drawerIcon: ({ color }) => (
                            <IonIcons name='help-circle-outline' size={22} color={color} />
                        )
                    }
                } />
        </Drawers.Navigator>
    )
}

export default Drawer

