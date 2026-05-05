import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const CartContextData = createContext()

const CartContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [wishItems, setWishItems] = useState([])
    useEffect(() => {

    }, [])
    // const setData = async () => {
    //     await AsyncStorage.setItem('productLists', 'Dnyana')

    // }
    // setData();
    const AddToCart = async (selectedProduct) => {
        const item = cartItems.find((i) => i.id === selectedProduct.id)

        if (item) {
            const updatedCart = cartItems.map((i) =>
                i.id === selectedProduct.id
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
            )
            await AsyncStorage.setItem(JSON.stringify(updatedCart))
            setCartItems(updatedCart)
        } else {
            setCartItems([...cartItems, { ...selectedProduct, quantity: 1 }])
        }
    }


    const AddToWishList = async (LikedProducts) => {
        const LikedItem = wishItems.find((liked) => liked.id === LikedProducts.id)

        if (LikedItem) {
            const updatedWishItem = wishItems.map((liked) =>
                liked.id === LikedProducts.id
            )

            setWishItems(updatedWishItem)
        } else {
            setWishItems([...wishItems, { ...LikedProducts }])
        }
    }

    const RemoveFromCart = (selectedProductID) => {
        const filtered = cartItems.filter(item => item.id !== selectedProductID)
        setCartItems(filtered)
    }

    const IncreaseQty = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item

            )
        );
    }

    const DecreaseQty = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item

            )
        );
    }

    return (
        <CartContextData.Provider
            value={{
                cartItems,
                AddToCart,
                RemoveFromCart,
                IncreaseQty,
                DecreaseQty,
                AddToWishList
            }}>
            {children}
        </CartContextData.Provider>
    )
}

export default CartContext