import React from 'react'
import Navigator from './src/Naviagtion/Navigator'
import BottomTab from './src/Naviagtion/BottomTab'
import Drawer from './src/Naviagtion/Drawer'
import CartContext from './src/Context/CartContext'
import WishContext from './src/Context/WishListContext'
// import  ThemeContext from './src/Context/ThemeContext'
const App = () => {
  return (
  
      <WishContext>
        <CartContext>
          <Navigator>
            <Navigator />
            <BottomTab />
            <Drawer />
          </Navigator>
        </CartContext>
      </WishContext>
  )
}

export default App

