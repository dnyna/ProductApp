import React from 'react'
import Navigator from './src/Naviagtion/Navigator'
import BottomTab from './src/Naviagtion/BottomTab'
import Drawer from './src/Naviagtion/Drawer'
import CartContext from './src/Context/CartContext'
const App = () => {
  return (
 <CartContext>
    <Navigator>
      <Navigator/>
      <BottomTab/>
      <Drawer/>
    </Navigator>
 </CartContext>
  
  ) 
}

export default App

  