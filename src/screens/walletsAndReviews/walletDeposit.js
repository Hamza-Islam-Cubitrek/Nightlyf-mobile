import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import BackgroundImage from '../../components/commonLayOut';
import TitleHeading from '../../components/titleAppBarIcons';
import FlatButtons from '../../components/flatsButtons';
import Input from '../../components/customFields';

import {
  IconString,
  ImageString,
  NavigationString,
} from '../../constant/constants';
import {resHeight, resWidth} from '../../constant/widthHeight';

const WalletDeposit = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    amount: '',
    name:'',
  });
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  return (
    <BackgroundImage justifyContent={'flex-start'}>
      <View style={{marginTop: 50, paddingStart:50}}>
        <TitleHeading
          isleftIcon={true}
          leftIcon1={IconString.Go_Back}
          pressIconleft={() => navigation.goBack()}
          fontWeight={'bold'}
        />
      </View>

      <View
        style={{
          marginTop: 30,
          marginStart: resWidth(60),
          marginEnd: resWidth(60),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
              marginLeft: 'auto',
            }}>
            11,250.00 $
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            marginTop: 50,
            fontWeight: 'bold',
          }}>
          Deposit
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            marginTop: 30,
          }}>
          Choose Your Amount
        </Text>
        <View style={{flexDirection: 'row', marginTop:20}}>
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.Wallet)}
            title="500 $"
            WidthBtn={resWidth(140)}
            buttonHeight={resHeight(60)}
            backgroundColor={'transparent'}
            transparentBorder={true}
            btnTxtSize={15}
            buttonpad={1}
          />
          <View style={{width: resWidth(15)}} />
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.Wallet)}
            title="250 $"
            WidthBtn={resWidth(140)}
            buttonHeight={resHeight(60)}
            btnTxtSize={15}
            buttonpad={1}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop:20}}>
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.Wallet)}
            title="100 $"
            WidthBtn={resWidth(140)}
            buttonHeight={resHeight(60)}
            backgroundColor={'transparent'}
            transparentBorder={true}
            btnTxtSize={15}
            buttonpad={1}
          />
          <View style={{width: resWidth(15)}} />
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.Wallet)}
            title="50 $"
            WidthBtn={resWidth(140)}
            buttonHeight={resHeight(60)}
            backgroundColor={'transparent'}
            transparentBorder={true}
            btnTxtSize={15}
            buttonpad={1}
          />
        </View>
        <View style={{marginTop:20}}>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
          }}>
          Card Number
        </Text>
        <Input
            onChangeText={text => handleOnchange(Number, 'amount')}
            inputheight={50}
            textColor={'black'}   
            placeholder={'Enter Card Number'}
          />
           <Text
          style={{
            color: 'white',
            fontSize: 14,
            marginTop:15
          }}>
          Name
        </Text>
        <Input
            // onChangeText={text => handleOnchange(Name, 'name')}
            inputheight={50}
            textColor={'black'} 
            placeholder={'Enter Name'}  
          />
        </View>
        <View style={{flexDirection:'row'}}>
       
        <View>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            marginTop:15

          }}>
          Expiry Date
        </Text>
        <Input
            onChangeText={text => handleOnchange(Number, 'amount')}
            inputheight={50}
            textColor={'white'}  
            inputwidth={140} 
            inputBackgroundColor={'transparent'}
            placeholderTextColor="white" 
            placeholder={'10/12'}
          />
        </View>
        <View style={{width: resWidth(15)}} />

        <View>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            marginTop:15
          }}>
          CVC
        </Text>
        <Input
            // onChangeText={text => handleOnchange(Name, 'name')}
            inputheight={50}
            inputwidth={140}
            textColor={'white'} 
            placeholder={'123'}  
            placeholderTextColor="white" 
            inputBackgroundColor={'#1E89A0'}
          />
        </View>
        </View>
       
      </View>      
    </BackgroundImage>
  );
};

export default WalletDeposit;

const styles = StyleSheet.create({});
