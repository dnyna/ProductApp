// import {  Image,  StyleSheet,  View,  TouchableOpacity,  Text,  FlatList,  ActivityIndicator,TextInput } from 'react-native'

// import React, { useEffect, useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
// import axios from 'axios'

// // React Native Paper
// import { Portal, Modal } from 'react-native-paper'

// import Categories from '../Component/Categories'
// // import SearchBar from '../Component/SearchProducts'

// import Sizes from '../styles/Sizes'
// import Margins from '../styles/margin'
// import Boldness from '../styles/Boldness'
// import Padding from '../styles/Padding'
// import Ionicons from 'react-native-vector-icons/Ionicons'

// const Home = () => {

//   const Navigation = useNavigation()


//   const ProfilePicture = require('../Assets/profilePicture.png')
//   const LeftIcon = require('../Assets/leftIcon.png')
//   const StylishLogo = require('../Assets/StylishLogo.png')
//   const mike = require('../Assets/mike.png')

//   const [products, setProducts] = useState([])
//   const [searchProduct, setSearchProduct] = useState('')
//   const [selectedCategory, setSelectedCategory] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [visible, setVisible] = useState(false)

//   // API CALL
//   const getData = async () => {
//     try {
//       setLoading(true)
//       const result = await axios.get(
//         'https://69afc347c63dd197feba11b5.mockapi.io/users'
//       )
//       setProducts(result.data)
//     } catch (error) {
//       console.log(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     getData()
//   }, [])

//   // getting unique categories

//   const categories = [...new Set(products.map(item => item.category))]

//   // filter logic

//   const getFilteredProducts = () => {
//     let data = products

//     if (searchProduct) {
//       data = data.filter(item =>
//         item.title?.toLowerCase().includes(searchProduct.toLowerCase())
//       )
//     }

//     if (selectedCategory) {
//       data = data.filter(item => item.category === selectedCategory)
//     }

//     return data
//   }

//   // cart
//   const renderProducts = ({ item }) => (
//     <TouchableOpacity
//       style={styles.cart}
//       onPress={() =>
//         Navigation.navigate('ShopPage', { selctedProduct: item })
//       }
//     >
//       <Image source={{ uri: item.image }} style={styles.productImage} />

//       <Text numberOfLines={1} style={styles.title}>
//         {item.title}
//       </Text>

//       <Text numberOfLines={2} style={styles.description}>
//         {item.description}
//       </Text>

//       <Text style={styles.price}>₹ {item.price}</Text>

//       <Text>
//         ⭐ {item.rating?.rate} ({item.rating?.count})
//       </Text>
//     </TouchableOpacity>
//   )

//   return (
//     <View style={styles.container}>

//       {/* Header */}
//       <View style={styles.headerContent}>
//         <TouchableOpacity>
//           <Image source={ProfilePicture} style={styles.profileImg} />
//         </TouchableOpacity>

//         <Image source={StylishLogo} />

//         <TouchableOpacity onPress={() => setVisible(true)}>
//           <Image source={LeftIcon} style={styles.LeftIconImg} />
//         </TouchableOpacity>
//       </View>

//       {/* Search */}
//       <View style={styles.subContainer}>

//         <TextInput
//           style={styles.SearchInput}
//           placeholder="Search Products"
//           value={searchProduct}
//           onChangeText={setSearchProduct}
//         />

//         <Ionicons
//           name="search-outline"
//           size={20}
//           style={styles.searchIcon}
//         />

//         <TouchableOpacity>
//           <Image source={mike} style={styles.mike} />
//         </TouchableOpacity>
//       </View>

//       {/* Categories */}
//       <Categories
//         onSelectCategory={setSelectedCategory}
//         onOpenFilter={() => setVisible(true)}
//       />

//       {/* Clear Filter */}
//       {selectedCategory && (
//         <TouchableOpacity onPress={() => setSelectedCategory(null)}>
//           <Text style={{ textAlign: 'center', marginTop: 10 }}>
//             Clear Filter
//           </Text>
//         </TouchableOpacity>
//       )}

//       {/* Products */}
//       {loading ? (
//         <ActivityIndicator size="large" style={{ marginTop: 50 }} />
//       ) : (
//         <FlatList
//           data={getFilteredProducts()}
//           renderItem={renderProducts}
//           keyExtractor={(item) => item.id.toString()}
//           numColumns={2}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: Padding.m }}
//         />
//       )}

//       {/* FILTER MODAL */}
//       <Portal>
//         <Modal
//           visible={visible}
//           onDismiss={() => setVisible(false)}
//           contentContainerStyle={styles.modal}
//         >
//           <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
//             Select Category
//           </Text>

//           {categories.map((cat, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => {
//                 setSelectedCategory(cat)
//                 setVisible(false)
//               }}
//             >
//               <Text style={{ padding: 10 }}>{cat}</Text>
//             </TouchableOpacity>
//           ))}
//         </Modal>
//       </Portal>

//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },

//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: Margins.marginThirtFiveHalf,
//     paddingHorizontal: Padding.M
//   },

//   profileImg: {
//     height: Sizes.middle,
//     width: Sizes.middle
//   },

//   LeftIconImg: {
//     height: Sizes.middle,
//     width: Sizes.middle
//   },
//   subContainer: {
//     marginTop: Margins.smallerSixteen,
//     alignItems: 'center'
//   },

//   SearchInput: {

//     height: Sizes.middle,
//     width: '90%',
//     borderRadius: 6,
//     paddingLeft: Padding.l,
//     backgroundColor: '#FFFFFF',
//     elevation: 3,

//   },

//   searchIcon: {
//     position: 'absolute',
//     left: Margins.smallest,
//     top: Margins.smallTen
//   },

//   mike: {
//     position: 'absolute',
//     left: Margins.marginOForty,
//     top: Margins.ThirtyONegt
//   },
//   cart: {
//     flex: 1,
//     margin: 10,
//     borderRadius: 8,
//     backgroundColor: '#fff',
//     elevation: 2
//   },

//   productImage: {
//     height: 120,
//     resizeMode: 'contain'
//   },

//   title: {
//     fontSize: Sizes.s,
//     fontWeight: Boldness.XL
//   },

//   description: {
//     marginTop: 5
//   },

//   price: {
//     fontWeight: 'bold'
//   },

//   modal: {
//     backgroundColor: 'white',
//     margin: 20,
//     padding: 20,
//     borderRadius: 10
//   }
// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})