import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const WishContextData = createContext()

const WishContext = ({ children }) => {
    const[wishItems, setWishItems] = useState([])
    //getItem

    const LoadLikedItems = async () => {
        try {
            let LikedItems = await AsyncStorage.getItem('wish');
            LikedItems = LikedItems ? JSON.parse(LikedItems) : [];
            setWishItems(items);
        } catch (error) {
            console.log('error')
        }

    }

    //setItem

    const saveLikedItems = async (items) => {
        try {
            await AsyncStorage.setItem('wish', JSON.stringify(items));
        } catch (error) {
            console.log('error')
        }

    }
    //WishList
    const AddToWish = async (selectedProduct) => {
        const item = wishItems.find(
            (i) => i.id === selectedProduct.id);

        if (!item) {
            setWishItems([...wishItems,selectedProduct])
                
          
        } 
        setWishItems(LoadLikedItems)
        await saveLikedItems(LoadLikedItems)
    }

    

    return (
        <WishContextData.Provider
            value={{                
                AddToWish,
                wishItems,
               

            }}>
            {children}
        </WishContextData.Provider>
    )
}

export default WishContext