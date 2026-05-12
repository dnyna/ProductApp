import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const WishContextData = createContext()

const WishContext = ({ children }) => {
    const [wishItems, setWishItems] = useState([])
    //getItem

    useEffect(() => {
        const LoadLikedItems = async () => {
            try {
                let LikedItems = await AsyncStorage.getItem('wish');
                LikedItems = LikedItems ? JSON.parse(LikedItems) : [];
                setWishItems(LikedItems);
            } catch (error) {
                console.log('error')
            }

        }
        LoadLikedItems()
    }, [])



    //setItem for save wishlist

    const saveLikedItems = async (items) => {
        try {
            await AsyncStorage.setItem('wish', JSON.stringify(items));
        } catch (error) {
            console.log('error')
        }

    }

    const RemoveFromWishList = (selectedProduct) => {
        const filtered = wishItems.filter(item => item.id !== selectedProduct)
        setWishItems(filtered)
    }
    //adding items toWishList
    const AddToWish = async (selectedProduct) => {
        const itemExits = wishItems.find(
            (i) => i.id === selectedProduct.id);

        if (!itemExits) {
            const updatedItems = ([...wishItems, selectedProduct])
            setWishItems(updatedItems)


        }
        await saveLikedItems(updatedItems)
    }



    return (
        <WishContextData.Provider
            value={{
                AddToWish,
                wishItems,
                RemoveFromWishList, 
            }}>
            {children}
        </WishContextData.Provider>
    )
}

export default WishContext