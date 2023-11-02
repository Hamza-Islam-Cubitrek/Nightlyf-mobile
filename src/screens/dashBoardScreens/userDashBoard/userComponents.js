import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { resHeight, resWidth } from '../../../constant/widthHeight'
import BackgroundImageText from '../../../components/backgroundImageText'
import FlatButtons from '../../../components/flatsButtons'
import { Colors1, ImageString } from '../../../constant/constants'
import CustomTitle from '../../../components/titleHeader'


const BookingCards =()=>{
  return(
    <BackgroundImageText
    cardHeight={resHeight(120)}
    cardWidth={resWidth(320)}
    resizeImg={'contain'}
    borderRad={resWidth(20)}
    img={ImageString.Club_DashBoard_Biding}>
    <View
      style={bookingCardStyle.cardStyle}>
      <CustomTitle
        isRow={false}
        textColumn1={'Bidding'}
        textColumn2={'Overview'}
        fontSize1={resWidth(25)}
        fontSize2={resWidth(25)}
        fontWeight1={'bold'}
        fontWeight2={'bold'}
      />
    </View>
  </BackgroundImageText>
  )
}


const CorouselComponents = ({pressUploadJob,pressEdit}) => {
  return (
    <View style={coroselStyles.corouselCard}>
    <BackgroundImageText
      img={ImageString.Club_DashBoard_BackImage}
      cardHeight={resHeight(300)}
      cardWidth={resWidth(300)}
      borderRad={resWidth(25)}>
      <View style={coroselStyles.coroselContainer}>
        
        <View style={coroselStyles.coroselEditIcon}>
        <TouchableOpacity onPress={pressEdit}>
          <Image
            source={ImageString.Edit_Icon}
            style={coroselStyles.coroselEditImage}
          />
          </TouchableOpacity>
        </View>
        
        <View style={coroselStyles.textContent}>
          <Text style={[coroselStyles.text1, coroselStyles.textPopular]}>
            Popular Club
          </Text>
          <Text style={[coroselStyles.text1, coroselStyles.textNightClub]}>
            XS NightClub
          </Text>
          <Text style={[coroselStyles.text1, coroselStyles.textPopular]}>
            4.1 Stars
          </Text>
          <View style={coroselStyles.rowButton}>
            <FlatButtons
              title={'Upload Jobs'}
              onPress={pressUploadJob}
              WidthBtn={resWidth(90)}
              buttonHeight={resHeight(35)}
              buttonpad={1}
              btnTxtSize={12}
            />
            <FlatButtons
              title={'View Jobs'}
              WidthBtn={resWidth(90)}
              buttonHeight={resHeight(35)}
              buttonpad={1}
              btnTxtSize={12}
            />
          </View>
        </View>
      </View>
    </BackgroundImageText>
  </View>
  )
}
const bookingCardStyle = StyleSheet.create({
  cardStyle:{
    position: 'absolute',
    top: resHeight(20),
    left: resWidth(12),
  }
})


const coroselStyles = StyleSheet.create({
    corouselCard: {
        paddingTop: resHeight(15),
        justifyContent: 'center',
        alignItems: 'center',
      },
      coroselContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: resWidth(25),
        position: 'relative',
      },
      coroselEditIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        width: resWidth(40),
        height: resHeight(40),
        // backgroundColor:'red'
      },
      coroselEditImage: {
        height: resHeight(20),
        width: resWidth(20),
      },
      textContent: {
        marginLeft: resWidth(20),
        marginBottom: resHeight(20),
        // backgroundColor:'red',
        width: resWidth(200),
        height: resHeight(130),
        bottom: 0,
        position: 'absolute',
      },
      text1: {
        color: Colors1.white,
      },
      textPopular: {
        fontSize: resWidth(15),
      },
      textNightClub: {
        fontSize: resWidth(20),
      },
      rowButton: {
        paddingTop: 10,
        flexDirection: 'row',
        // alignItems:'flex-start',
        justifyContent: 'space-between',
        // alignContent: 'center',
      },


})


export {CorouselComponents,
  BookingCards} 


{/*
corouselCard
coroselContainer
coroselEditIcon
coroselEditImage
textContent
textPopular
text1
textNightClub
rowButton
*/}