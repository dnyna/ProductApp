import { Image, StyleSheet, TextInput, View, TouchableOpacity, Text, FlatList, Button } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Header from '../Component/Header'
import Sizes from '../styles/Sizes'
import Margins from '../styles/margin'
import Boldness from '../styles/Boldness'
import Radius from '../styles/Radius'
import Categories from '../Component/Categories'
import axios from 'axios'
import Padding from '../styles/Padding'
import LoadingPage from '../Component/LoadingPage'
import NoDataFound from '../Component/NoDataFound'
import Color from '../styles/Colors'
import Gaps from '../styles/Gap'
import { micEvents, SpeechToText } from 'react-native-speech-convertor';
import { WishContextData } from '../Context/WishListContext'
const Home = () => {

  const Navigation = useNavigation() //used for screen Navigation one of the hook
  const mike = require('../Assets/mike.png')
  const [products, setProducts] = useState([])  //stored api data
  const [displayData, setDisplayData] = useState([]) //stored filtered products
  const [searchProduct, setSearchProduct] = useState('') // stored searched inputs
  const [loading, setLoading] = useState(true) //loading state for api data
  const [refresh, setRefresh] = useState(false)// to refresh the state 
  const [sortOrder, setSortOrder] = useState(null) //for storing sort order
  const [likedItem, setLikedItems] = useState(false) // stores liked products
  const [listening, setListening] = useState(false) // tracks microphones

  //  Fetch Data
  const { AddToWish } = useContext(WishContextData)
  const { RemoveFromWishList } = useContext(WishContextData)

  // Listen for recognized speech results
  useEffect(() => {
    const resultListener = micEvents.addListener('onSpeechResult', (searchProduct) => {
      console.log('Recognized text:', searchProduct);
      setSearchProduct(searchProduct); // Update your state with the recognized text
    });

    // Listen for speech recognition errors

    // const errorListener = micEvents.addListener('onSpeechError', (err) => {
    //   console.error('Speech error:', err);
    // });

    // Clean up listeners on unmount  

    return () => {
      resultListener.remove();
      // errorListener.remove();

    };
  }, []);


  //fetching product data from api
  const getData = async () => {
    try {
      setLoading(true)
      const result = await axios.get(
        'https://699c3665110b5b738cc20669.mockapi.io/api/todo/users'
      )
      setProducts(result.data)
      setDisplayData(result.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  //runs once when screen loads, avoids rerendering
  useEffect(() => {
    getData()
  }, [])



  //  Search logic
  const handleSearch = (query) => {
    setSearchProduct(query)

    const filtered = products.filter(item =>
      item.category?.toLowerCase().includes(query.toLowerCase())

    )

    setDisplayData(filtered)
  }


  //  Category Filter
  const handleCategory = (category) => {
    const filtered = products.filter(item =>
      item.category?.toLowerCase() === category.toLowerCase()
    )

    setDisplayData(filtered)
  }


  //  Sort merthod used here for high price and lowPrice products
  const handleSort = () => {
    let sorted = [...displayData]
    if (sortOrder === 'low') {
      sorted.sort((a, b) => b.price - a.price)
      setSortOrder('high')
    } else {
      sorted.sort((a, b) => a.price - b.price)
      setSortOrder('low')
    }
    setDisplayData(sorted)
  }

  // Refresh productList
  const handleRefresh = async () => {
    setRefresh(true)
    await getData()
    setRefresh(false)
  }

  //WishList LIked/unliked products

  const ToggleLike = (item) => {
    const isLiked = likedItem[item.id]
    setLikedItems((prev) => ({
      ...prev,
      [item.id]: !prev[item.id]
    }))
    if (isLiked) {
      RemoveFromWishList(item.id)
    } else {
      AddToWish(item)

    }
  }

  // renders Product #cart
  const renderProducts = ({ item }) => (
    <TouchableOpacity
      style={styles.cart}
      onPress={() =>
        Navigation.navigate('ShopPage', { selctedProduct: item })
      }
    >
      <View>
        <Image source={{ uri: item.image }} style={styles.productImage} />

        <View style={styles.renderProducts}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>

          <Text numberOfLines={2} style={styles.description}>
            {item.description}

          </Text>

          <Text style={styles.price}>₹ {item.price.toFixed(0)}</Text>

          <Text>
            ⭐ {item.rating?.rate} ({item.rating?.count})
          </Text>
        </View>
        <TouchableOpacity style={styles.heartContainer} onPress={() => { ToggleLike(item) }}>
          {
            likedItem[item.id] ? (<Ionicons name='heart' color={'red'} size={25} />
            )
              :
              (<Ionicons name='heart-outline' color={'red'} size={25} />)
          }

        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )



  return (
    <View style={styles.container}>

      <Header />

      {/* Search */}
      <View style={styles.subContainer}>
        <TextInput
          style={styles.SearchInput}
          placeholder="Search any Products"
          placeholderTextColor={'#BBBBBB'}
          value={searchProduct}
          onChangeText={handleSearch}
        />

        <Ionicons name="search-outline" size={20} style={styles.searchIcon} />

        <TouchableOpacity onPress={() => {
          setListening(true)
          SpeechToText.startListening();
          setTimeout(() => {
            SpeechToText.stopListening()
            setListening(false)
          }, 4000);
        }}
          style={listening ? styles.listening : null}
        >
          <Image source={mike} style={styles.mike} />
        </TouchableOpacity>

      </View>

      {/*  Categories */}

      <Categories
        onSelectCategory={handleCategory}
        onSort={handleSort}
      />

      {/*  Product List */}

      {loading ? (
        <LoadingPage />
      ) : displayData.length === 0 ? (
        <NoDataFound />
      ) : (
        <FlatList
          data={displayData}
          renderItem={renderProducts}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.mainContainer}
          columnWrapperStyle={styles.columns}
          onRefresh={handleRefresh}
          refreshing={refresh}
        />
      )}

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subContainer: {
    paddingLeft: 16,
    paddingRight: 16
  },

  SearchInput: {
    paddingTop: Padding.ss,
    paddingLeft: Padding.xll,
    paddingBottom: Padding.ss,
    borderRadius: Radius.L,
    backgroundColor: '#FFFFFF',
    position: 'relative'
  },

  searchIcon: {
    position: 'absolute',
    left: Margins.ThirtyTwo,
    top: Margins.smallTen,
    color: Color.searchIcon
  },
  listening: {
    borderWidth: 1,
    color: 'red'
  },
  mike: {
    position: 'absolute',
    top: Margins.ThirtyONegt,
    left: 297,

  },

  cart: {
    flex: 1,
    borderRadius: Radius.XXL,
    backgroundColor: '#fff',
    elevation: 1,

  },

  renderProducts: {
    paddingTop: Padding.mS,
    paddingLeft: Padding.mS,
    paddingRight: Padding.mS,
    paddingBottom: Padding.s,
  },

  productImage: {
    height: Sizes.sizeOTSix,
    width: Sizes.oFSix,
    resizeMode: 'center'
  },

  title: {
    fontSize: Sizes.s,
    fontWeight: Boldness.XL
  },

  price: {
    fontWeight: 'bold',
  },

  description: {
    paddingTop: Padding.mS,
    paddingBottom: Padding.mS,
  },
  heartContainer: {
    backgroundColor: 'white',
    paddingLeft: 120,
    paddingBottom: 10
  },

  mainContainer: {
    paddingLeft: Padding.Mm,
    paddingRight: Padding.Mm,
    paddingTop: Padding.Mm

  },

  columns: {
    paddingBottom: Padding.Middle,
    gap: Gaps.C,
  }
})