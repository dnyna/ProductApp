import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Screens/Home'
import Cart from '../Screens/Cart'
import WishList from '../Screens/WishList'
import HelpCenter from '../Screens/HelpCenter'
import IonIcons from 'react-native-vector-icons/Ionicons'
import CustomDrawer from '../Component/CustomDrawer'
import { ThemeToggleContex } from '../Context/ThemeContext'
const Drawers = createDrawerNavigator();

const Drawer = () => {
    const { Theme, mode } = useContext(ThemeToggleContex)
    return (
        <Drawers.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: Theme.color
                },
                headerTintColor: Theme.color,
                drawerStyle: {
                    backgroundColor: Theme.color
                }, drawerLabelStyle: {
                    color: Theme.color
                },
                drawerActiveTintColor: mode ? 'white' : 'black',
                drawerInactiveTintColor: mode ? 'white' : 'black'
            }}
        >
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

