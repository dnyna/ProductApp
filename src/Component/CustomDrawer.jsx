import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Sizes from '../styles/Sizes'
import Boldness from '../styles/Boldness'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Switch, } from 'react-native';
import { ThemeToggleContex } from '../Context/ThemeContext'
import { useNavigation } from '@react-navigation/native'
const CustomDrawer = (props) => {
    const Navigation = useNavigation()
    const { mode, Theme, ToggleTheme } = useContext(ThemeToggleContex)

    return (
        <View style={styles.containerFirst}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{}}>
                <Image source={require('../Assets/Profile.png')} style={styles.profileImg} />
                <Text style={styles.txt}>Dany</Text>
                <Text style={styles.txtCoin}>1230 Coins</Text>

                <View style={{ paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>  

                {/* underline */}

                <View style={{ borderBottomWidth: 1, }}></View>

                {/* Switch */}

                <View style={{ flexDirection: 'row', paddingTop: 30 }}>
                    <Text style={styles.darkThemeTxt}>Dark Theme</Text>
                    <View style={styles.container}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={mode ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={ToggleTheme}
                            value={mode}
                            style={styles.switch}
                            
                        />
                    </View>
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity onPress={() => Navigation.navigate('CreateAccount')} style={styles.logOutBtn}>
                <Text style={styles.BtnTxt}>LogOut</Text>
                <Ionicons name='log-out-outline' size={20} />
            </TouchableOpacity>
        </View>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    containerFirst: {
        flex: 1,
    },
    darkThemeTxt: {
        fontSize: 16
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    switch: {
        paddingLeft: 120
    },
    profileImg: {
        height: 80,
        width: 80,
        alignSelf: 'center',
    },
    txt: {
        textAlign: 'center',
        fontSize: Sizes.mm,
        fontWeight: Boldness.L
    },
    txtCoin: {
        fontSize: 14,
        fontWeight: Boldness.l,
        textAlign: 'center',
        paddingBottom: 20


    },
    logOutBtn: {
        padding: 30,
        flexDirection: 'row',
        gap: 10
    },
    BtnTxt: {
        fontSize: 16
    }
})