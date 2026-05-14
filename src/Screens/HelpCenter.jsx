import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import axios from 'axios'
import Padding from '../styles/Padding'
import Borders from '../styles/Borders'
import Radius from '../styles/Radius'
import Sizes from '../styles/Sizes'
import Boldness from '../styles/Boldness'
import Margins from '../styles/margin'
import { useContext } from 'react'
import { ThemeToggleContex } from '../Context/ThemeContext'

const HelpCenter = () => {
  const { Theme } = useContext(ThemeToggleContex)


  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([
    {
      id: 8,
      type: "bot",
      message: 'hello!!   How can i help you?'
    }
  ])
  // setChat(chat)

  const flatListRef = useRef()
  const getBotReply = (text) => {
    const msg = text.toLowerCase()
    if (msg.includes('order')) {
      return "Your order will be deliverd within 3 to 4 days"
    }
    if (msg.includes('payment')) {
      return " please check your internet connection and the account balace too"
    } if (msg.includes('refund')) {
      return " Your refund will be credited to your account within 5 days"
    }
    if (msg.includes('delivery')) {
      return " sometime it is delayed because of hight volume."
    }
    if (msg.includes('cancel')) {
      return " can cancel your order before it gets shipped, just click on cancel order."
    }
    return "Sorry, I didn't understand"
  }

  const sendMessages = () => {
    if (message.trim() === "") return
    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: message,
      createdAt: Date.now()
    }
    setChat(prev => [...prev, userMessage])
    const userText = message

    setMessage("")
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        message: getBotReply(userText)
      }
      setChat(prev => [...prev,
        botMessage])
    }, 1000)
  }



  return (
    // <View style={{ paddingTop: 60, }}>

    //   <View style={{ marginLeft: 16, borderWidth: Borders.s, borderRadius: Radius.XXXXL, width: Sizes.SizeOEF, padding: Padding.ss, backgroundColor: '#ddf9f3' }}>
    //     <Text style={{ textAlign: 'center', fontWeight: 'bold' }}> How can I help you ?</Text>
    //   </View>
    //   <View style={{ flexDirection: 'row', gap: 6, paddingTop: 20, paddingLeft: 16 }}>
    //     <TouchableOpacity style={styles.issues} onPress={() => sendMessage("order")}>
    //       <Text style={styles.txts}>order</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.issues} onPress={() => sendMessage("payment")}>
    //       <Text style={styles.txts}>payment</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.issues} onPress={() => sendMessage("refund")}>
    //       <Text style={styles.txts}>refund</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.issues} onPress={() => sendMessage("delivery")}>
    //       <Text style={styles.txts}>delivery</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.issues} onPress={() => sendMessage("cancel")}>
    //       <Text style={styles.txts}>cancel Order</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <ScrollView contentContainerStyle={styles.scrollContainer}>
    //     {
    //       chat.map((item, index) => (
    //         <View key={index} style={styles.chats}>
    //           <Text>
    //             {item.message}
    //           </Text>
    //         </View>
    //       )

    //       )
    //     }


    //   </ScrollView>
    // </View>
    <View style={[styles.container, { backgroundColor: Theme.backgroundColor }]}>
      <FlatList
        ref={flatListRef}
        data={chat}
        keyExtractor={(item) => item.id.toString()}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBox,
              item.type === 'user' ? styles.userMessage : styles.botMessage, { backgroundColor: Theme.backgroundColor }]}>
            <Text style={[styles.messageTxt, { color: Theme.color, borderColor: Theme.color }]}>
              {item.message}
            </Text>
          </View>
        )}
      />
      <View style={{ paddingBottom: 20 }}>
        <TextInput
          placeholder='type message.....'
          placeholderTextColor={'grey'}
          value={message}
          onChangeText={setMessage}
          style={[styles.typeInput, { backgroundColor: Theme.backgroundColor, color: Theme.color, borderColor: Theme.color, }]}

        />
        <TouchableOpacity onPress={sendMessages} style={{ position: 'absolute', right: 30, top: 10, }}>
          <Text style={[styles.sendTxt, { color: Theme.color }]}>Send</Text>
        </ TouchableOpacity>
      </View>
    </View>

  )
}


export default HelpCenter

const styles = StyleSheet.create({
  container: {
    paddingTop: Padding.Xl,
    gap: 25,
    paddingLeft: Padding.smallOne,
    paddingRight: Padding.smallOne,
    backgroundColor: '#eefafa',
    flex: 1,

  },
  messageBox: {
    maxWidth: '75%',
    borderRadius: 12,
    marginVertical: 5,
    paddingVertical: 5,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#3c7e53'
  },
  messageTxt: {
    fontSize: 15,
    fontWeight: 600,
    color: 'white',
    fontStyle: 'italic'
  },
  userMessage: {
    alignSelf: 'flex-end',
    borderWidth: 1
  },
  botMessage: {
    alignSelf: 'flex-start'
  },

  typeInput: { borderWidth: 1, borderRadius: 10, paddingLeft: 20, backgroundColor: 'white' },

  sendTxt: { color: 'blue', fontWeight: '700' }


})