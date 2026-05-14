import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Padding from '../styles/Padding'
import Color from '../styles/Colors'
import Sizes from '../styles/Sizes'
import Boldness from '../styles/Boldness'
import Radius from '../styles/Radius'
import Borders from '../styles/Borders'
import { ThemeToggleContex } from '../Context/ThemeContext'

const ProfilScreen = () => {
    const {Theme} = useContext(ThemeToggleContex)
    const Profile = require('../Assets/Profile.png')
    return (
        <View>
            <ScrollView>
                <View style={[styles.cont,{backgroundColor:Theme.backgroundColor}]}>

                    <View style={styles.imgCont}>
                        <Image source={Profile} />
                    </View>
                    <View >
                        <Text style={[styles.prsnalDet,{color:Theme.color}]}>Personal Details</Text>
                    </View>
                    <View style={styles.ViewCont}>
                        <Text style={[styles.txtInput,{color:Theme.color}]}>Email Address</Text>
                        <TextInput
                            placeholder='Enter Email on your own risk'
                            placeholderTextColor={'#585353'}
                            style={styles.Input}
                        />
                    </View>
                    <View >
                        <Text style={[styles.txtInput,,{color:Theme.color}]}>Email Address</Text>
                        <TextInput
                            placeholder='Enter Email on your own risk'
                            placeholderTextColor={'#585353'}

                            style={styles.Input} />
                    </View>

                    <Text style={[styles.chngPass,{color:Theme.color}]}>Change Password</Text>
                    <View style={styles.undrline}></View>
                    <View style={styles.addrssWrpper}>
                        <Text style={[styles.Bsness,{color:Theme.color}]}>Business Address Details</Text>
                    </View>

                    <View style={styles.ViewCont}>
                        <Text style={[styles.txtInput,,{color:Theme.color}]}>Pincode</Text>
                        <TextInput
                            placeholder='Enter Email on your own risk'
                            placeholderTextColor={'#585353'}

                            style={styles.Input} />
                    </View>

                    <View style={styles.ViewCont}>
                        <Text style={[styles.txtInput,,{color:Theme.color}]}>Address</Text>
                        <TextInput
                            placeholder='Enter Email on your own risk'
                            placeholderTextColor={'#585353'}

                            style={styles.Input} />
                    </View>

                    <View style={styles.ViewCont}>
                        <Text style={[styles.txtInput,,{color:Theme.color}]}>City</Text>
                        <TextInput
                            placeholder='Enter Email on your own risk'
                            placeholderTextColor={'#585353'}

                            style={styles.Input} />
                    </View>
                    <View style={styles.ViewCont}>
                        <Text style={[styles.txtInput,{color:Theme.color}]}>Pincode</Text>
                        <TextInput
                            placeholder='Enter Email on your own risk'
                            placeholderTextColor={'#585353'}
                            style={styles.Input} />
                    </View>

                    <View style={styles.ViewCont}>
                        <Text style={[styles.txtInput,{color:Theme.color}]}>Address</Text>
                        <TextInput
                            placeholder='Enter Email on your own risk'
                            placeholderTextColor={'#585353'}

                            style={[styles.Input, {backgroundColor:Theme.backgroundColor}]}
                        />
                    </View>

                    <View style={styles.ViewCont}>
                        <Text style={[styles.txtInput,,{color:Theme.color}]}>City</Text>
                        <TextInput
                            placeholder='Enter Email on your own risk'
                            placeholderTextColor={'#585353'}

                            style={styles.Input}
                        />
                    </View>
                    <View style={styles.loginWrapper}>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => Navigation.navigate('GetStarted')}>
                            <Text style={[styles.loginText,,{color:Theme.color}]}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </View>


    )
}

export default ProfilScreen

const styles = StyleSheet.create({
    cont: {
        paddingLeft: Padding.TF,
        paddingRight: Padding.TF,
    },

    Input: {
        borderWidth: Borders.s,
        borderColor: Color.lightgrey,
        borderRadius: Radius.XXL,
        paddingLeft: Padding.m
    },
    chngPass: {
        paddingTop: Padding.Middle,
        fontSize: Sizes.s,
        paddingLeft: Padding.hugeTOZ,
        color: Color.buttonColor,
        paddingBottom: Padding.Ml
    },

    undrline: {
        borderBottomWidth: Borders.s,
        borderColor: Color.underLine
    },

    addrssWrpper: {
        paddingTop: Padding.FF,
        paddingBottom: Padding.mm
    },

    Bsness: {
        fontWeight: Boldness.l,
        fontSize: Sizes.mm
    },

    imgCont: {
        paddingLeft: Padding.oott,
        paddingRight: Padding.XXXxL,
        paddingTop: Padding.MM,
        paddingBottom: Padding.MiddleT
    },

    prsnalDet:
    {
        fontSize: Sizes.M,
        fontWeight: Boldness.l,
        paddingBottom: Padding.m
    },

    txtInput: {
        fontSize: Sizes.s,
        fontWeight: Boldness.m,
        paddingBottom: Padding.Middle
    },

    loginBtn: {
        borderRadius: Radius.S,
        backgroundColor: Color.buttonColor

    },

    loginWrapper: {
        paddingTop: Padding.FF,

        paddingBottom: Padding.FS
    },

    loginText: {
        paddingTop: Padding.smallOne,
        paddingBottom: Padding.smallOne,
        fontSize: Sizes.Ml,
        fontWeight: Boldness.l,
        color: 'white',
        textAlign: 'center'

    },
    ViewCont: {
        paddingBottom: Padding.MiddleT
    }
})