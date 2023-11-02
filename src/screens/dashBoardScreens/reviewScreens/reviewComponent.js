import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TransparentCard from '../../../components/cards/cardConst'
import { resHeight, resWidth } from '../../../constant/widthHeight'
import { Colors1, ImageString } from '../../../constant/constants'

const ReviewComponent = ({reviewsData}) => {
  return (
    <TransparentCard>
        <View style={styles.transparentCard}>
            <View style={styles.cardAvatar}>
                <Image source={reviewsData.imageUrl} style={styles.imageAvatar}/>
            </View>
            <View style={styles.cardText}>
              <Text style={[textReview.textReview,{fontWeight:'bold'}]}>{reviewsData.title}</Text>
              <Text style={[textReview.textReview,{fontSize:resWidth(12)}]}>{reviewsData.message}</Text>
              <Text style={textReview.textReview}>{reviewsData.star}</Text>
            </View>
        </View>
    </TransparentCard>
  )
}

export default ReviewComponent

const styles = StyleSheet.create({
    transparentCard:{
        // marginTop:resHeight(20),
  flexDirection:'row'
      },
      // cardAvatar:{flex:1},
      imageAvatar:{
        height:resHeight(100),
        width:resWidth(100),
        marginRight:resWidth(5),
        resizeMode:'contain'},
        cardText:{
          flex:1,
          // marginRight:resWidth(10),
          paddingRight:resWidth(10)
        }
})

const textReview = StyleSheet.create({
    textReview:{
  
      color:Colors1.white
    }
  })