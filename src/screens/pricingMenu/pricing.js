

import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import BackgroundImage from '../../components/commonLayOut'
import { GlobalStyle } from '../../style/externalStyle'
import TitleHeading from '../../components/titleAppBarIcons'
import TopBarPricing from '../../controllers/navController/topBarBookingRequest/topBarPricing'
import { resHeight, resWidth } from '../../constant/widthHeight'
import FlatButtons from '../../components/flatsButtons'
import DialogCard from '../../components/dialogCard';
import { IconString } from '../../constant/constants';




const Pricing = ({navigation}) => {
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  return (
  <BackgroundImage>
    <View style={GlobalStyle.container}>
        <View style={styles.Header}>
          <View style={styles.AppBar}>
            <TitleHeading title={'Pricing'} isText={true} isleftIcon={true} leftIcon1={IconString.Go_Back} fontWeight={'bold'}  pressIconleft={()=>navigation.goBack()}/>
          </View>
          <View style={styles.topTab}>
            <TopBarPricing />
          </View>
          {/* <View style={styles.bottomButton}>
              <FlatButtons title={'Add Product'} onPress={toggleModal} WidthBtn={resWidth(180)}/>
          </View> */}
          {/* <DialogCard 
          textContent1={'Product Name'}
          textContent2={'Product Price'}
          textContent3={'Upload Image'}
          isModalVisible={isModalVisible} 
          toggleModal={toggleModal} 
          titleDialogBox={'Add Product'} 
          BtnText={'Enter'} 
          widthBtn={resWidth(200)} 
          buttonpad={10}/> */}
        </View>

</View>
  </BackgroundImage>
  )
}

export default Pricing

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
    },
    bottomButton:{
      flex:.2,
      // backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center'
    }
})