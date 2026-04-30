import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Color from '../styles/Colors'
import Sizes from '../styles/Sizes'
import Margins from '../styles/margin'
import { useNavigation } from '@react-navigation/native'
import Radius from '../styles/Radius'
import Padding from '../styles/Padding'


const GetStarted = () => {
    const Navigation = useNavigation()

    const BgImg = require('../Assets/getStartedImg.png')
    return (
        <View style={styles.container} >
            <ImageBackground source={BgImg} style={styles.img}>

                <View style={styles.ImgTxt}>
                    
                    <Text style={styles.Txt}>    You want                 Authentic, here                      you go!</Text>
                    <Text style={styles.findItTxt}>Find it here, buy it now!</Text>

                </View>

                <View style={styles.getStartedBtnView}>
                    
                    <TouchableOpacity style={styles.getStarted} onPress={() => Navigation.navigate('MainTab')}>
                        <Text style={styles.titleOfBtn}>Get Started</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    img: {
        flex: 1,
        resizeMode: 'contain'
    },

    ImgTxt: {
        paddingTop: 500,
        PaddingBottom: 14,

    },

    Txt: {
        fontSize: Sizes.Xl,
        color: '#FFFFFF',
        fontWeight: 600,
        textAlign: 'center'
    },

    findItTxt: {
        color: '#F2F2F2',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: Sizes.m,
        fontWeight: 400,
        paddingTop: 14,
        paddingLeft: 37,
        paddingRight: 38


    },
    getStartedBtnView: {
        paddingLeft: 55,
        paddingRight: 55,
        paddingTop: 44

    },
    getStarted: {
        borderRadius: Radius.S,
        backgroundColor: Color.buttonColor,
        paddingHorizontal: 71,
        paddingVertical: 14,
    },

    titleOfBtn: {
        fontSize: 21,
        color: 'white'
    }





})