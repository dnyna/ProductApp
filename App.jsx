import React from 'react'
import Navigator from './src/Naviagtion/Navigator'
import BottomTab from './src/Naviagtion/BottomTab'
import CartContext from './src/Context/CartContext'
const App = () => {
  return (
 <CartContext>
    <Navigator>
      <Navigator/>
      <BottomTab/>
    </Navigator>
 </CartContext>

  ) 
}

export default App

  