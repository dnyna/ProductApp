import { Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Screens/Home'
import Cart from '../Screens/Cart'
import Search from '../Screens/Search'
import HelpCenter from '../Screens/HelpCenter'
import IonIcons from 'react-native-vector-icons/Ionicons'
const Drawers = createDrawerNavigator();

const Drawer = () => {
    return (
        <Drawers.Navigator>
            <Drawers.Screen name='Home' component={Home}
                options={
                    {
                        headerShown: false
                    }
                } />
            <Drawers.Screen name='Cart' component={Cart}
                options={
                    {
                        headerShown: false
                    }
                } />
            <Drawers.Screen name='Search' component={Search}
                options={
                    {
                        headerShown: false
                    }
                } />
            <Drawers.Screen name='HelpCenter' component={HelpCenter}
                options={
                    {
                        drawerIcon: ({ focused, size }) => {
                            <IonIcons name={focused ? 'heart' : 'heart-outline'}
                                size={size}
                            />
                        },
                        headerShown: false
                    }
                } />
        </Drawers.Navigator>
    )
}

export default Drawer

