import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const HepCenter = () => {

  const [BoatInfo, setBoatInfo] = useState('')
  const [chatData, setChatData] = ([
    {
      id: 8,
      type: bot,
      questions: 'How can i help you?'
    }
  ])
  setChatData(chatData)
  const BoatData = async () => {
    const Response = await axios.get('https://699c3665110b5b738cc20669.mockapi.io/api/todo/')
    setBoatInfo(Response)
  }
  useEffect(() => {
    BoatData()
  }, [])
  return (
    <View>
      <Text>{chatData}</Text>
      <Text>{BoatInfo}</Text>

    </View>
  )
}

export default HepCenter

const styles = StyleSheet.create({})