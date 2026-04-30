import { StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Margins from '../styles/margin'
import Sizes from '../styles/Sizes'
import Padding from '../styles/Padding'
import Radius from '../styles/Radius'

const SearchBar = ({ value, onChangeText }) => {

    const mike = require('../Assets/mike.png')

    return (
        <View style={styles.subContainer}>
            <TextInput
                style={styles.SearchInput}
                placeholder="Search Products"
            />

            <Ionicons
                name="search-outline"
                size={20}
                style={styles.searchIcon}
            />

            <TouchableOpacity>
                <Image source={mike} style={styles.mike} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    subContainer: {
        paddingTop: Padding.Middle,
        alignItems: 'center'
    },

    SearchInput: {

        height: Sizes.middle,
        borderRadius: Radius.L,
        paddingLeft: Padding.xll,
        backgroundColor: '#FFFFFF',
        elevation: 3,

    },

    searchIcon: {
        position: 'absolute',
       Left: 14
    },

    mike: {
        position: 'absolute',
        paddingRight:6
    },
})