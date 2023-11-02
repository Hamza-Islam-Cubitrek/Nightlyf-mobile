import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BackgroundImage from '../../../src/components/commonLayOut';
import FlatButtons from '../../components/flatsButtons';
import {RegisterLoginStyle, GlobalStyle} from '../../style/externalStyle';
import {Colors1, ImageString, NavigationString} from '../../constant/constants';

import CustomTitle from '../../components/titleHeader';

const RegisterLogin = ({navigation}) => {
  const handleButtonPress = () => {
    console.log('Button pressed');
  };
  return (
    <BackgroundImage>
      <View style={GlobalStyle.container}>
        <View style={RegisterLoginStyle.titleContain}>
          <CustomTitle
            isRow={false}
            // fontColor={Colors1.white}
            textColumn1="Revolutionize"
            textColumn2="Music"
            fontSize1={24}
            fontSize2={24}
            fontWeight1="bold"
            alignCenter={'left'}
          />
          {/* <View style={{flexDirection:'column'}}>
                <Text style={RegisterLoginStyle.text1}>Revolutionize </Text>
                <Text style={RegisterLoginStyle.text2}>Music</Text>
           </View> */}
          <Image
            source={ImageString.Avatar_ImageReg}
            resizeMode="contain"></Image>
        </View>
        <View style={RegisterLoginStyle.bannerContain}>
          <Image
            source={ImageString.Banner_Image}
            style={RegisterLoginStyle.registerbanner}></Image>
          <Text style={RegisterLoginStyle.text3}>Connect and Collaborate </Text>

          <Text style={RegisterLoginStyle.text4} numberOfLines={4}>
            Join us in creating unforgettable nights and connect with the beat
            that moves you. Experience the best night of your life with NiteLyfe
          </Text>
        </View>
        <View style={RegisterLoginStyle.buttonContain}>
          <View style={RegisterLoginStyle.buttonWrapper}>
            <FlatButtons
              title={'Register'}
              onPress={() =>
                navigation.navigate(NavigationString.Register_Screen)
              }
              backgroundColor={Colors1.themeColor}
            />
          </View>
          <View style={RegisterLoginStyle.buttonWrapper}>
            <FlatButtons
              title={'Sign In'}
              onPress={() => navigation.navigate(NavigationString.Login_Screen)}
              transparentBorder={true}
            />
          </View>
        </View>
      </View>
    </BackgroundImage>
  );
};

export default RegisterLogin;
