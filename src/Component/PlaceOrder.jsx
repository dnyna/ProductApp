// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import Color from '../styles/Colors'
// import Margins from '../styles/margin'
// import Sizes from '../styles/Sizes'
// import { useNavigation } from '@react-navigation/native'
// import Boldness from '../styles/Boldness'
// import Borders from '../styles/Borders'

// const PlaceOrder = () => {
//   // const { selctedProduct } = route.params;

//   const Navigation = useNavigation()

//   const Favorite = require('../Assets/favorite.png')
//   const BackArrow = require('../Assets/BackArrow.png')
//   const coupon = require('../Assets/coupon.png')
//   const ProdeedPayment = require('../Assets/ProdeedPayment.png')
//   const BelowLines = require('../Assets/Below Lines.png')
//   const DownArrow = require('../Assets/DownArrow.png')
//   return (

//     <View styale={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => Navigation.navigate('MainTab')}>
//           <Image source={BackArrow} />
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => Navigation.navigate()}>
//           <Image source={Favorite} style={styles.favImg} />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.product}>
//         {/* <Image source={{ uri: selctedProduct.image }}
//           style={styles.productImage} />  */}
//         <View style={styles.textProduct}>
//           {/* <Text style={styles.categoryOfProduct}>{selctedProduct.category}</Text> */}
//           {/* <Text style={styles.titleOfProduct}>{selctedProduct.title}</Text> */}
//           <View style={{ marginTop: Margins.extraSmallest, flexWrap: 'wrap', flexDirection: 'row' }}>
//             <View style={styles.size}><Text>Sizes</Text>
//               <Image source={DownArrow} style={styles.downArrow} />
//             </View>
//             <View style={styles.Qty}><Text>Qty</Text>
//               <Image source={DownArrow} style={styles.downArrow} />
//             </View>
//           </View>
//           <Text style={styles.delBy}>Delivery by</Text>
//         </View>
//       </View >

//       <View style={styles.Coupan}>

//         <Image source={coupon} style={styles.ImgCpn} />
//         <Text style={styles.applyCpn}>Apply Coupons</Text>
//         <TouchableOpacity>
//         <Text style={styles.select}>Select</Text>
//         </TouchableOpacity>

//         <Image source={BelowLines} style={styles.belowLineFirst} width={340} />

//         <View>
//           <Text style={styles.orderDetaisls}>Order Payment Datails</Text>
//           {/* <Text style={styles.orderAmnt}>Order Amounts                                           {selctedProduct.price}</Text> */}
//           <View style={styles.convienceKnow}>

//             <Text>Convenience</Text>
//             <TouchableOpacity>
//             <Text style={styles.knowMore}>Know More</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//             <Text style={styles.applyCoupan}>Apply Coupon</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
//             <Text style={styles.freeDil}>Delivery Free</Text>
//             <TouchableOpacity>
//             <Text style={styles.free}>Free</Text>
//             </TouchableOpacity>
//           </View>
//           <Image source={BelowLines} style={styles.belowLine} width={340} />

//           <View style={styles.orderTotalBlock}>
//             {/* <Text style={styles.OrderTotal}>Order Total                                            {selctedProduct.price}</Text> */}
//             <Text style={styles.Emi}>EMI  Available </Text>
//             <TouchableOpacity>
//             <Text style={styles.details}>Details</Text>
//             </TouchableOpacity>
//           </View>

//         </View>
//       </View>
//       <View style={styles.paymentBlock}>
//         {/* <Text style={styles.payment}>₹{selctedProduct.price}</Text> */}
//         <Text style={styles.viewDetails}>View Details</Text>
//         <TouchableOpacity>
//         <Image source={ProdeedPayment} style={styles.payment} />
//         </TouchableOpacity>
//       </View>

//     </View>
//   )
// }

// export default PlaceOrder

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: Margins.XXLlargest,
//     backgroundColor: Color.backGroundColor
//   },


//   headerContainer: {
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: Margins.smallMargin,
//     height: Sizes.lm,
//     width: Sizes.largest,
//     marginLeft: Margins.smallerOne,

//     backgroundColor: Color.backGroundColor,
//   },
//   productImage: {
//     height: Sizes.oFTT,
//     width: Sizes.largeOTF,
//     resizeMode: 'contain'
//   },
//   textProduct: {
//     height: Sizes.SizeOTZ,
//     width: Sizes.SizeOEE,
//     marginLeft: Margins.smallMarginTwenty,
//     marginTop: Margins.m
//   },
//   categoryOfProduct: {
//     fontSize: Sizes.mm,
//     fontWeight: Boldness.l,
//     marginTop: Margins.extraSmallest
//   },

//   titleOfProduct: {
//     fontSize: Sizes.m,
//     fontWeight: Boldness.m
//   },
//   size: {
//     height: Sizes.lm,
//     width: Sizes.ES,
//     backgroundColor: Color.sizeQuantityBg
//   },
//   downArrow: {
//     position: 'absolute',
//     right: Margins.Zero,
//     top: Margins.s
//   },
//   Qty: {
//     height: Sizes.lm,
//     width: Sizes.ES,
//     backgroundColor: Color.sizeQuantityBg,
//     marginLeft: Margins.verSmallMargin
//   },
//   delBy: {
//     marginTop: Margins.verSmallMargin
//   },
//   favImg: {
//     marginLeft: Margins.smallest,
//     height: Sizes.mm,
//     width: Sizes.Ml,
//     marginTop: Margins.s
//   },
//   select: {
//     marginLeft: Margins.marginOneThirty,
//     color: Color.buttonColor,

//   },
//   belowLineFirst: {
//     marginTop: Margins.extraSmallMargin,
//     marginBottom: Margins.extraSmallMargin
//   },
//   orderDetaisls: {
//     fontSize: Sizes.M,
//     fontWeight: Boldness.M
//   },
//   orderAmnt: {
//     marginTop: Margins.marginTwoSix,
//     fontSize: Sizes.mm
//   },
//   convienceKnow: {
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//     height: Sizes.Ml,
//     width: Sizes.LargeSize,
//     marginTop: Margins.verSmallMargin
//   },

//   applyCoupan: {
//     color: Color.buttonColor,
//     fontSize: Sizes.s,
//     fontWeight: Boldness.l,
//     marginLeft: Margins.SizeAT
//   },
//   product: {
//     height: Sizes.oFTT,
//     width: Sizes.largeTTT,
//     borderWidth: Borders.s,
//     borderColor: 'white',
//     marginHorizontal: 'auto',
//     marginTop: Margins.smallthreeSeven,
//     backgroundColor: Color.backGroundColor,
//     flexWrap: 'wrap',

//   },
//   Coupan: {
//     backgroundColor: Color.backGroundColor,
//     borderWidth: Borders.s,
//     width: Sizes.largest,
//     height: Sizes.LargeSize,
//     borderBlockEndColor: Color.backGroundColor,
//     borderBlockStartColor: Color.backGroundColor,
//     borderLeftColor: Color.backGroundColor,
//     borderRightColor: Color.backGroundColor,

//     marginHorizontal: 'auto',
//     marginTop: Margins.extraSmallMargin,
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//   },
//   ImgCpn: {
//     marginLeft: Margins.smallTen
//   },
//   applyCpn: {
//     marginLeft: Margins.smallTen,
//   },

//   knowMore: {
//     color: Color.buttonColor,
//     marginLeft: Margins.smallMarginTwenty,
//     fontWeight: Boldness.l
//   },
//   freeDil: {
//     marginTop: Margins.verSmallMargin
//   },
//   free: {
//     fontSize: Sizes.m,
//     color: Color.buttonColor,
//     fontWeight: Boldness.l,
//     marginLeft: Margins.marginTEightin,
//     marginTop: Margins.verSmallMargin
//   },
//   belowLine: {
//     marginTop: Margins.marginThirtFiveHalf
//   },
//   orderTotalBlock: {
//     height: Sizes.large,
//     width: Sizes.LargeSize
//   },
//   OrderTotal: {
//     fontSize: Sizes.M,
//     fontWeight: Boldness.M,
//     marginTop: Margins.smallMarginTwenty
//   },
//   details: {
//     fontSize: Sizes.s,

//     color: Color.buttonColor,
//     position: 'absolute',
//     left: Margins.marginOneT,
//     bottom: 2,
//     fontWeight: Boldness.l
//   },
//   Emi: {
//     fontSize: Sizes.mm,
//     fontWeight: Boldness.m,
//     marginTop: 5
//   },
//   paymentBlock: {
//     borderWidth: Borders.s,
//     width: Sizes.largetNt,
//     height: Sizes.SizeOfC,
//     borderColor: Color.borderColor,
//     marginHorizontal: 'auto',
//     marginTop: Margins.FourFourMargin,
//     borderRadius: 24,
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     backgroundColor: Color.blockColor,

//   },
//   payment: {
//     marginTop: Margins.smallest,
//     fontSize: Sizes.mm,
//     fontWeight: Boldness.l,
//     marginLeft: Margins.s
//   },

//   viewDetails: {
//     marginTop: Margins.Fifty,
//     left: Margins.smallerOne,

//     position: 'absolute'
//   },

//   payment: {
//     marginTop: Margins.smallest
//   }

// })