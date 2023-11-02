import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import BackgroundImage from '../../components/commonLayOut';
import TitleHeading from '../../components/titleAppBarIcons';
import FlatButtons from '../../components/flatsButtons';
import CustomDropdown from '../../components/dropdown';
import {
  IconString,
  ImageString,
  NavigationString,
} from '../../constant/constants';
import {resHeight, resWidth} from '../../constant/widthHeight';

const wallet = ({navigation}) => {
  const options = [
    {id: '1', label: 'Option 1', value: 'Option 1'},
    {id: '2', label: 'Option 2', value: 'Option 2'},
    {id: '3', label: 'Option 3', value: 'Option 3'},
  ];

  const options1 = [
    {id: '1', label: 'Option 1', value: 'Option 1'},
    {id: '2', label: 'Option 2', value: 'Option 2'},
    {id: '3', label: 'Option 3', value: 'Option 3'},
  ];

  const handleOptionSelect = selectedValue => {
    console.log(`Selected: ${selectedValue}`);
  };

  return (
    <BackgroundImage justifyContent={'flex-start'}>
    
    <View style={styles.headerContainer}>
        <TitleHeading
          isleftIcon={true}
          isText={true}
          title={'Wallet'}
          leftIcon1={IconString.Go_Back}
          pressIconleft={() => navigation.goBack()}
          fontWeight={'bold'}
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
          style={styles.currentBalanceText}>
          Current Balance
        </Text>
        <Text
          style={styles.balanceAmount}>
          $ 5,750
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.WalletDeposit)}
            title="Deposit"
            WidthBtn={resWidth(140)}
            buttonHeight={resHeight(50)}
            btnTxtSize={15}
            buttonpad={1}
          />
        </View>
        <View style={styles.buttonSpacer} />
        <View style={styles.buttonWrapper}>
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.WalletWithdraw)}
            title="Withdraw"
            WidthBtn={resWidth(140)}
            buttonHeight={resHeight(50)}
            backgroundColor={'grey'}
            btnTxtSize={15}
            buttonpad={1}
          />
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <CustomDropdown
          options={options}
          onSelect={handleOptionSelect}
          textColor={'white'}
          border_color={'transparent'}
          border_padding={8}
          WidthBtn={resWidth(330)}
          title={'View Pending Credit'}
        />
      </View>
      <View style={styles.dropdownContainer}>
        <CustomDropdown
          options={options1}
          onSelect={handleOptionSelect}
          textColor={'white'}
          border_color={'transparent'}
          border_padding={8}
          WidthBtn={resWidth(330)}
          title={'View Received Credit'}
        />
      </View>
      <View style={styles.okayButtonContainer}>
        <FlatButtons
          title="Okay"
          WidthBtn={resWidth(300)}
          buttonHeight={resHeight(60)}
          btnTxtSize={15}
          buttonpad={1}
        />
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: resHeight(50),
  },
  creditCardContainer: {
    marginTop: resHeight(40),
    marginStart: resWidth(60),
    marginEnd: resWidth(60),
  },
  currentBalanceText: {
    color: 'white',
    position: 'absolute',
    top: resHeight(100),
    left: resWidth(10),
    fontSize: 18,
  },
  balanceAmount: {
    color: 'white',
    position: 'absolute',
    top: resHeight(130),
    left: resWidth(10),
    fontWeight:'bold',
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: resHeight(30),
    justifyContent: 'center',
  },
  buttonWrapper: {
    width: resWidth(140),
  },
  buttonSpacer: {
    width: 15,
  },
  dropdownContainer: {
    marginTop: 20,
    alignSelf: 'center',
  },
  okayButtonContainer: {
    marginTop: 40,
    alignSelf: 'center',
  },
});

export default wallet;
