import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/commonLayOut'
import { GlobalStyle } from '../../style/externalStyle'
import TitleHeading from '../../components/titleAppBarIcons'
// import Colors1 from '../../Constants/ColorsConst'
 import TransparentCard from '../../components/cards/cardConst'
import Input from '../../components/customFields'
import FlatButtons from '../../components/flatsButtons';
import {NavigationString} from '../../constant/constants'
// import { resHeight } from '../../Constants/widthHeight'

const RecoverPassword = ({navigation}) => {

  return (
    // 
        <BackgroundImage>
      <View style={GlobalStyle.container}>
        <View style={styles.container1}>
        <TitleHeading title={'Recover Password'} fontSize={24} fontWeight={'bold'} isText={true}/>
        <TransparentCard>
        <Text style={{color:'white'}}>Enter Your E-mail or Phone Number to recover your Password</Text>
        <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            // label="Email"
            placeholder="Enter Your E-Mail"
            // error={errors.email}
          inputheight={50}
          />
          <View style={styles.container2}>
          <FlatButtons title={'Send OTP'} onPress={()=>navigation.navigate(NavigationString.Enter_Otp)}/>

          </View>
        </TransparentCard>
        </View>
          
      </View>

        </BackgroundImage>
    // 
  )
}

const styles = StyleSheet.create({
  container1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },container2:{
    paddingTop:10,
  }
  
})

export default RecoverPassword




            {/* <SafeAreaView style={{padding:20}}>
        <View style={styles.contentAvatar}>
              <Text style={{fontSize:24,fontWeight:'bold',color:'white',paddingLeft:15}}>Recover Password</Text>
            </View>
            <TransparentCard>
            <Text style={{color:'white'}}>Enter Your E-mail or Phone Number to recover your Password</Text>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            // label="Email"
            placeholder="Enter Your E-Mail"
            // error={errors.email}
          />
          <View style={{paddingBottom:10}}></View>
          <Buttons onPress={() => navigation.navigate('Enterotp')} title='Send OTP' buttonHeight={resHeight(60)} buttonBord={10} buttonPad={15} />
          </TransparentCard>
          </SafeAreaView> */}