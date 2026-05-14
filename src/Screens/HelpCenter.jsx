import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Padding from '../styles/Padding'
import Borders from '../styles/Borders'
import Radius from '../styles/Radius'
import Sizes from '../styles/Sizes'
import Boldness from '../styles/Boldness'
import Margins from '../styles/margin'


const HepCenter = () => {
  // const [userChat, setUserChat] = useState(false)

  // const [message, setMessage] = useState('')
  const [chat, setChat] = ([
    {
      id: 8,
      type: "bot",
      questions: 'How can i help you?'
    }
  ])
  // setChat(chat)
  const sendMessage = (question) => {
    let Botreply = ""
    if (question === 'order') {
      Botreply = "Your order will be deliverd within 3 - to4 days"
    } else if (question === 'payment') {
      Botreply = " please check your internet connection and the account balace too"
    } else if (question === 'refund') {
      Botreply = " refund will be credited to your account within 5 days"
    }
    else if (question === 'delivery') {
      Botreply = " sometime it is delayed because of hight volume."
    }
    else if (question === 'cancel') {
      Botreply = " can cancel your order before it gets shipped, just click on cancel order."
    }
    setChat(prev => [
      ...prev, {
        type: 'user',
        message: question,
      },
      {
        type: 'bot',
        message: Botreply
      }
    ])
  }


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {
        chat.map((item, index) => (
          <View key={index} style={styles.chats}>
            <Text>
              {item.message}
            </Text>
          </View>
        )

        )
      }
      {/* <View style={{ paddingLeft: Padding.m, borderBottomWidth: Borders.exsmall, borderColor: '#bc737f ' }}>
        <Text style={styles.HelpCentTxt}> Help Center ??</Text>
      </View> */}
      <View style={{ borderWidth: Borders.s, borderRadius: Radius.XXXXL, width: Sizes.SizeOEF, padding: Padding.ss, backgroundColor: '#ddf9f3' }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}> How can I help you ?</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 6, }}>
        <TouchableOpacity style={styles.issues} onPress={() => sendMessage("order")}>
          <Text style={styles.txts}>order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.issues} onPress={() => sendMessage("payment")}>
          <Text style={styles.txts}>payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.issues} onPress={() => sendMessage("refund")}>
          <Text style={styles.txts}>refund</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.issues} onPress={() => sendMessage("delivery")}>
          <Text style={styles.txts}>delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.issues} onPress={() => sendMessage("cancel")}>
          <Text style={styles.txts}>cancel Order</Text>
        </TouchableOpacity>
      </View>


      {/* <View style={styles.userChats}>
        <Text style={styles.quesion}>user:  where is my order?</Text>
      </View>

      <View style={styles.chats}>
        <Text style={styles.answer}>Bot  :  Your order will be deliverd within 3-to4 days</Text>
      </View>


      <View style={styles.userChats}>
        <Text style={styles.quesion}>user:  payment failed issue?</Text>
      </View>

      <View style={styles.chats}>
        <Text style={styles.answer}>Bot  :  please check your internet connection and the account balace too.</Text>
      </View>


      <View style={styles.userChats}>
        <Text style={styles.quesion}>user:  when will I get refund?</Text>
      </View>

      <View style={styles.chats}>
        <Text style={styles.answer}>Bot  :  refund will be credited to your account within 5 days.</Text>
      </View>


      <View style={styles.userChats}>
        <Text style={styles.quesion}>user:  delivery taking too long?</Text>
      </View>

      <View style={styles.chats}>
        <Text style={styles.answer}>Bot  :  sometime it is delayed because of hight volume.</Text>
      </View>


      <View style={styles.userChats}>
        <Text style={styles.quesion}>user:  how can i cancel order?</Text>
      </View>

      <View style={styles.chats}>
        <Text style={styles.answer}>Bot  :  can cancel your order before it gets shipped, just click on cancel order.</Text>
      </View>

      <View style={styles.chats}>
        <Text style={styles.answer}>Bot  :  Thank you!! Never come back here😠</Text>
      </View> */}


    </ScrollView>

  )
}

export default HepCenter

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: Padding.Xl,
    gap: 25,
    paddingLeft: Padding.smallOne,
    paddingRight: Padding.smallOne,
    paddingBottom: Padding.m,
    backgroundColor: '#eefafa'
  },
  HelpCentTxt: {
    fontSize: Sizes.M,
    fontWeight: Boldness.l,
    marginBottom: Margins.smallMarginTwenty
  },

  issues: {
    borderWidth: Borders.s,
    borderRadius: Radius.L,
    padding: Padding.small,
    borderBlockStartColor: '#bc737f',
    borderBlockEndColor: '#bc737f',

  },

  txts: {
    fontSize: Sizes.m,
    fontWeight: Boldness.M,
    color: '#625e5e'
  },

  userChats: {
    borderWidth: Borders.exsmall,
    borderRadius: Radius.XXXXL,
    width: Sizes.largeTOS,
    padding: Padding.ss,
    backgroundColor: '#f8fffd'
  },
  chats: {
    borderWidth: Borders.exsmall,
    borderRadius: Radius.XXXXL,
    width: Sizes.largeTOS,
    padding: Padding.ss,
    backgroundColor: '#f8fffd'
  }


})