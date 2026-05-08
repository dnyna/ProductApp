import { StyleSheet, Image, View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Sizes from '../styles/Sizes'
import Boldness from '../styles/Boldness'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Switch, } from 'react-native';
// import { ThemeToggleContex } from '../Context/ThemeContext'
const CustomDrawer = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // const {mode,Theme,ToggleTheme}= useContext(ThemeToggleContex)
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
                    <Text style={{ fontSize: 16 }}>Dark Theme</Text>
                    <View style={styles.container}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ paddingLeft: 120 }}
                        />
                    </View>
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 30, flexDirection: 'row', gap: 10 }}>
                <Text style={{ fontSize: 16 }}>LogOut</Text>
                <Ionicons name='log-out-outline' size={20} />
            </View>
        </View>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    containerFirst: { flex: 1, },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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


    }
})