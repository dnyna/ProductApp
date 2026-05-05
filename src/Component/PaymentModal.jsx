
import { StyleSheet, Text, View, Modal, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Padding from '../styles/Padding'
import Sizes from '../styles/Sizes'
import Boldness from '../styles/Boldness'
const PaymentModal = ({ showModal, setShowModal, TotalPrice }) => {
    const Star = require('../Assets/Star.png')
    const Vector = require('../Assets/Vector.png')
    const StarOne = require('../Assets/StarOne.png')
    const StarTwo = require('../Assets/StarTwo.png')
    const StarThree = require('../Assets/StarThree.png')
    const StarFour = require('../Assets/StarFour.png')
    return (
        <View>
            <Modal transparent={true} visible={showModal} animationType='slide' backgroundColor={'red'}>

                <View style={styles.container}>
                    <View style={styles.secondContainer}>

                        <Image source={Star} />
                        <Image source={Vector} style={{ position: 'absolute', bottom: 88 }} />
                        <Image source={StarOne} style={{ position: 'absolute', left: 92, }} />
                        <Image source={StarTwo} style={{ position: 'absolute', left: 92, top: 37 }} />
                        <Image source={StarThree} style={{ position: 'absolute', right: 109 }} />
                        <Image source={StarFour} style={{ position: 'absolute', right: 99, top: 62 }} />
                        <Image source={StarThree} style={{ position: 'absolute', left: 168, top: 26 }} />
                        <Image source={StarThree} style={{ position: 'absolute', left: 92, bottom: 73 }} />

                        <TouchableOpacity onPress={() => setShowModal(false)}>

                            <Text style={styles.paymentTxt}>Payment done successfully.</Text>
                        </TouchableOpacity>


                    </View>

                </View>
            </Modal>
        </View>
    )
}

export default PaymentModal

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    paymentTxt: {
        paddingBottom: Padding.TF,
        paddingTop: Padding.Middle,
        paddingLeft: Padding.ll,
        fontSize: Sizes.m,
        fontWeight: Boldness.l,
        paddingRight: Padding.ST
    },
    secondContainer: {
        backgroundColor: 'white',
        paddingTop: Padding.LL,
        borderRadius: Padding.MiddleT,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


