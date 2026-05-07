import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const CartContextData = createContext()

const CartContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    //getItem

    useEffect(() => {
        LoadCartItem()
    }, [])

    const LoadCartItem = async () => {
        try {
            let items = await AsyncStorage.getItem('carts');
            items = items ? JSON.parse(items) : [];
            setCartItems(items);
        } catch (error) {
            console.log('error')
        }

    }

    //setItem

    const saveData = async (items) => {
        try {
            await AsyncStorage.setItem('carts', JSON.stringify(items));
        } catch (error) {
            console.log('error')
        }

    }

    //removeItems

    //pending

    const AddToCart = async (selectedProduct) => {
        let updatedCart;
        const item = cartItems.find((i) => i.id === selectedProduct.id);

        if (item) {
            updatedCart = cartItems.map((i) =>
                i.id === selectedProduct.id
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
            )
        } else {
            updatedCart = [...cartItems,
            { ...selectedProduct, quantity: 1 }
            ]
        }
        setCartItems(updatedCart)
        await saveData(updatedCart)
    }

    //WishList
    const AddToWish = async (selectedProduct) => {
        let updatedWishList;
        const item = cartItems.find((i) => i.id === selectedProduct.id);

        if (item) {
            updatedWishList = cartItems.map((i) =>
                i.id === selectedProduct.id
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
            )
        } else {
            updatedCart = [...cartItems,
            { ...selectedProduct, quantity: 1 }
            ]
        }
        setCartItems(updatedWishList)
        await saveData(updatedWishList)
    }

    //remove from cart

    const RemoveFromCart = (selectedProductID) => {
        const filtered = cartItems.filter(item => item.id !== selectedProductID)
        setCartItems(filtered)
    }

    //increase quantity
    const IncreaseQty = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item

            )
        );
    }

    //decrease quantity
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
                LoadCartItem,
                AddToWish

            }}>
            {children}
        </CartContextData.Provider>
    )
}

export default CartContext