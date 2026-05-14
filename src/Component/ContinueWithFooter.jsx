import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../styles/Colors'
import Sizes from '../styles/Sizes'
import Margins from '../styles/margin'
import { useNavigation } from '@react-navigation/native'
import Padding from '../styles/Padding'
import { useContext } from 'react'
import { ThemeToggleContex } from '../Context/ThemeContext'
const ContinueWithFooter = () => {
    const { Theme } = useContext(ThemeToggleContex)

    const GoogleImg = require('../Assets/Buttons.png')
    const Navigation = useNavigation()
    return (

        <View style={styles.ContinueWithContainer}>
            <View style={styles.contnueWith}>
                <Text style={[styles.ContinueWithTxt, { color: Theme.color }]}>- OR Continue with -</Text>

                <View style={styles.footerButton}>
                    <Image source={GoogleImg} />
                </View>

                <View style={styles.wrapperCraeteAct}>
                    <Text style={[styles.crtAcTxt, { color: Theme.color }]}>Create an Account  </Text>

                    <TouchableOpacity onPress={() => Navigation.navigate('CreateAccount')}>
                        <Text style={styles.signUp}>SignUp</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default ContinueWithFooter

const styles = StyleSheet.create({
    ContinueWithContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Padding.XXL,
        // height:136,
        // width:194
    },

    contnueWith: {
        alignItems: 'center',
        justifyContent: 'center',

        // paddingBottom: Padding.m,

    },

    ContinueWithTxt: {
        textAlign: 'center'
    },
    footerButton: {
        paddingTop: Padding.m,
    },
    signUp: {
        color: Color.buttonColor,
        textDecorationLine: 'underline'
    },
    crtAcTxt:
        { fontSize: Sizes.m },
    wrapperCraeteAct: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingTop: 28
    }
})