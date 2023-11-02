

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBarRequest from '../../../controllers/navController/topBarBookingRequest/topBarRequest'
import BackgroundImage from '../../../components/commonLayOut'
import { GlobalStyle } from '../../../style/externalStyle'
import TitleHeading from '../../../components/titleAppBarIcons'
import { resHeight } from '../../../constant/widthHeight'
import { IconString } from '../../../constant/constants'



const RequestDj = ({navigation}) => {
  return (
  <BackgroundImage>
    <View style={GlobalStyle.container}>
        <View style={styles.Header}>
          <View style={styles.AppBar}>
            <TitleHeading title={'Request'} isText={true} isleftIcon={true} leftIcon1={IconString.Go_Back} fontWeight={'bold'} pressIconleft={()=>navigation.goBack()}/>
          </View>
          <View style={styles.topTab}>
            <TopBarRequest />
          </View>
        </View>
        {/* <View style={styles.MainContent}></View> */}

  
        {/* <View style={styles.Footer}></View> */}

</View>
  </BackgroundImage>
  )
}

export default RequestDj

const styles = StyleSheet.create({
    Header:{
        flex:1,
        // backgroundColor:'red'
    },
    MainContent:{
        flex:1,
        backgroundColor:'white'
    },
    AppBar:{
      marginVertical:resHeight(25),
    },
    topTab:{
      // width:300,
      // height:400
flex:1
    }
})