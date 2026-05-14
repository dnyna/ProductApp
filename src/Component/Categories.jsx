import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Sizes from '../styles/Sizes'
import Color from '../styles/Colors'
import Padding from '../styles/Padding'
import Radius from '../styles/Radius'
import Boldness from '../styles/Boldness'
import Gaps from '../styles/Gap'
import Margins from '../styles/margin'
import { useContext } from 'react'
import { ThemeToggleContex } from '../Context/ThemeContext'
const Categories = ({ onSelectCategory, onSort }) => {

    const { Theme, GreyTheme } = useContext(ThemeToggleContex)

    const [showFilter, setShowFilter] = useState(false)  //used this for show and hide the modal

    //all images declared here
    const SecondImg = require('../Assets/ImageTwo.png')
    const ThirdImg = require('../Assets/WomensColthing.png')
    const FourthImg = require('../Assets/ImageFour.png')
    const filterIcon = require('../Assets/filterIcon.png')
    const sortIcon = require('../Assets/sortIcon.png')

    return (
        <View>
            {/* Header */}

            <View style={[styles.Home, { backgroundColor: GreyTheme.backgroundColor }]}>
                <Text style={[styles.heading, { color: Theme.color }]}>All Featured</Text>

                {/* Sort */}

                <View style={styles.sortFilter}>
                    <TouchableOpacity style={styles.sortBtn} onPress={onSort}>
                        <Text>Sort</Text>
                        <Image source={sortIcon} style={styles.icon} />
                    </TouchableOpacity>

                    {/* Filter */}

                    <View style={styles.FilterCover}>
                        <TouchableOpacity onPress={() => setShowFilter(true)} style={styles.filterBtn}>
                            <Text>Filter</Text>
                            <Image source={filterIcon} style={styles.icon} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            {/* Categories */}

            <View style={[styles.categoryContainer, { backgroundColor: Theme.backgroundColor }]}>
                <TouchableOpacity onPress={() => onSelectCategory('jewelery')}>
                    <Image source={SecondImg} />
                    <Text style={[styles.catText, { color: Theme.color }]}>jewelery</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onSelectCategory('electronics')}>
                    <Image source={ThirdImg} />
                    <Text style={[styles.catText, { color: Theme.color }]}>electro</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onSelectCategory("men's clothing")}>
                    <Image source={FourthImg} />
                    <Text style={[styles.catText, { color: Theme.color }]}>Mens</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onSelectCategory("women's clothing")}>
                    <Image source={ThirdImg} />
                    <Text style={[styles.catText, { color: Theme.color }]}>Womens</Text>
                </TouchableOpacity>

            </View>


            {/* modal for the filter */}

            <Modal visible={showFilter} transparent={true}>
                <View style={styles.Box}>
                    <TouchableOpacity style={styles.cat} onPress={() => onSelectCategory('jewelery')}>
                        <Text style={{ textAlign: 'center' }}>jewelery</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cat} onPress={() => onSelectCategory('electronics')}>
                        <Text style={{ textAlign: 'center' }}>electronics</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cat} onPress={() => onSelectCategory("men's clothing")}>
                        <Text style={{ textAlign: 'center' }}>men's clothing</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cat} onPress={() => onSelectCategory("women's clothing")}>
                        <Text style={{ textAlign: 'center' }}>women's clothing</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setShowFilter(false)}>
                        <View style={styles.filterCover}>
                            <Text style={{ textAlign: 'center' }}>Colse Filter</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </Modal>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({

    Home: {
        flexDirection: 'row',
        paddingTop: Padding.Middle,
        paddingBottom: Padding.Middle,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    heading: {
        fontSize: Sizes.M,
        fontWeight: Boldness.l,
        color: Color.HeadingColor,
        paddingLeft: Padding.mm
    },
    sortFilter: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingLeft: Padding.XxL,
        paddingTop: Padding.s,
        paddingRight: Padding.m,

    },

    sortBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.bgColor,
        padding: Padding.s,
        borderRadius: Radius.L,
    },
    FilterCover: {
        paddingLeft: Padding.small
    },

    filterBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.bgColor,
        padding: Padding.s,
        borderRadius: Radius.L,
    },

    icon: {
        marginLeft: Margins.s,
        height: Sizes.m,
        width: Sizes.m
    },

    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: Padding.mS,
        paddingLeft: Padding.TF,
        gap: Gaps.C,
        justifyContent: 'space-evenly',
        paddingRight: Padding.TF,
        paddingBottom: Padding.mS,
        backgroundColor: Color.bgColor
    },
    catText: { fontSize: Sizes.extraSmall, paddingLeft: Padding.small, fontWeight: Boldness.m },
    Box: {
        height: Sizes.larger,
        width: Sizes.OneFRT,
        position: 'absolute',
        right: Margins.smaller,
        top: Margins.mOSty,
        backgroundColor: 'white',
        borderRadius: Radius.M,
        elevation: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: Padding.s,
        gap: Gaps.B

    },

    cat: {
        height: Sizes.lmm,
        width: Sizes.SizeOTZ,
        justifyContent: 'center',
        borderRadius: Radius.M,
        backgroundColor: 'white',
        elevation: 3,
        paddingTBottom: Padding.ss,


    },

    filterCover: {
        height: Sizes.lmm,
        width: Sizes.NinT,
        borderRadius: Radius.L,
        backgroundColor: Color.buttonColor,
    }
})