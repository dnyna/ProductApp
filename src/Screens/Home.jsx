import {Image,StyleSheet,TextInput,View,TouchableOpacity,Text,FlatList} from 'react-native'

import React, { useEffect, useState } from 'react'
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
import { SafeAreaView } from 'react-native-safe-area-context'
import Color from '../styles/Colors'
import Gaps from '../styles/Gap'

const Home = () => {

  const Navigation = useNavigation()
  const mike = require('../Assets/mike.png')
  const [products, setProducts] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [searchProduct, setSearchProduct] = useState('')
  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(false)
  const [sortOrder, setSortOrder] = useState(null)

  //  Fetch Data

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

  useEffect(() => {
    getData()
  }, [])

  //  Search
  const handleSearch = (query) => {
    setSearchProduct(query)

    const filtered = products.filter(item =>
      item.title?.toLowerCase().includes(query.toLowerCase())
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

  // Refresh
  const handleRefresh = async () => {
    setRefresh(true)
    await getData()
    setRefresh(false)
  }

  // Product Card
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

          <Text style={styles.rating}>
            ⭐ {item.rating?.rate} ({item.rating?.count})
          </Text>   
        </View>
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

        <TouchableOpacity>
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
          showsVerticalScrollIndicator={true}
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
    flex:1,
  },

  subContainer: {
    alignItems: 'center'
  },

  SearchInput: {
    paddingTop: Padding.ss,
    paddingLeft: Padding.xll,
    paddingRight: Padding.XXXXL,
    paddingBottom: Padding.ss,
    borderRadius: Radius.L,
    paddingLeft: Padding.l,
    backgroundColor: '#FFFFFF',
  },

  searchIcon: {
    position: 'absolute',
    left: Margins.ThirtyTwo,
    top: Margins.smallTen,
    color: Color.searchIcon
  },

  mike: {
    position: 'absolute',
    top: Margins.ThirtyONegt,
    left: Margins.largeMargin
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
    resizeMode:'center'
  },

  title: {
    fontSize: Sizes.s,
    fontWeight: Boldness.XL
  },

  price: {
    fontWeight: 'bold',
  },

  description: {
paddingTop:Padding.mS,
paddingBottom:Padding.mS,
},   

  mainContainer: {
    paddingLeft: Padding.Mm,
    paddingRight:Padding.Mm,
    paddingTop:Padding.Mm
    
  },

  columns: {
    paddingBottom:Padding.Middle,
    gap: Gaps.C,
  }
})