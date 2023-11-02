import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import BackgroundImage from '../../components/commonLayOut';
import TitleHeading from '../../components/titleAppBarIcons';
import FlatButtons from '../../components/flatsButtons';
import Input from '../../components/customFields'

import {
  IconString,
  ImageString,
  NavigationString,
} from '../../constant/constants';
import { resHeight, resWidth } from '../../constant/widthHeight';

const WalletWithdraw = ({navigation}) => {
 
    const [inputs, setInputs] = React.useState({
        amount: '',
      });   
      const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      };
      
  return (
    <BackgroundImage justifyContent={'flex-start'}>
    <View style={{marginTop: 50}}>
      <TitleHeading
        isleftIcon={true}
        isText={true}
        isrightIcon1={true}
        leftIcon1={IconString.Go_Back}
        pressIconleft={() =>
          navigation.goBack()
        }
        fontWeight={'bold'}
      />
    </View>

    <View style={{marginTop: 30, marginStart: resWidth(60), marginEnd: resWidth(60)}}>
   <View style={{flexDirection:'row', alignItems:'center'}}>
   <Text
        style={{
          color: 'white',
          fontSize: 16,
        }}>
        Your Balance
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft:'auto'
        }}>
        11,250.00 $
      </Text>
   </View>
   <Text
        style={{
          color: 'white',
          fontSize: 24,
          marginTop:50,
          fontWeight: 'bold',
        }}>
        Withdraw
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 14,
          marginTop:40,
        }}>
        Amount
      </Text>
      <Input
            onChangeText={text => handleOnchange(Number, 'amount')}
            onFocus={() => handleError(null, 'amount')}
            inputheight={50}
            textColor={'black'}
            placeholder={'Enter Amount'}
            
          />
    </View>
    <View
        style={{
          marginTop: resHeight(40),
          marginStart: resWidth(60),
          marginEnd: resWidth(60),
        }}>
        <Image
          style={{height: resHeight(190), width: resWidth(295), borderRadius:12}}
          source={require('../../../assets/images/card-front.png')}
        />
        <Text
          style={{color: 'white',
          position: 'absolute',
          top: resHeight(100),
          left: resWidth(10),
          fontSize: 18,}}>
          Current Balance
        </Text>
        <Text
          style={{    color: 'white',
          position: 'absolute',
          top: resHeight(130),
          left: resWidth(10),
          fontWeight:'bold',
          fontSize: 18,}}>
          $ 5,750
        </Text>
      </View>
    
    <View style={{marginTop: 30, alignSelf: 'center'}}>
      <FlatButtons
        title="Send My Request"
        WidthBtn={resWidth(300)}
        buttonHeight={resHeight(60)}
        btnTxtSize={15}
        buttonpad={1}
      />
    </View>
    <View style={{marginTop: 15, alignSelf: 'center'}}>
      <FlatButtons
        title="Cancel"
        WidthBtn={resWidth(300)}
        buttonHeight={resHeight(60)}
        transparentBorder={true}
        btnTxtSize={15}
        buttonpad={1}
      />
    </View>
  </BackgroundImage>
  
  )
}

export default WalletWithdraw

const styles = StyleSheet.create({})