import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import TopBarBooking from '../../../controllers/navController/topBarBookingRequest/topBarBooking';
import BackgroundImage from '../../../components/commonLayOut';
import TitleHeading from '../../../components/titleAppBarIcons';
import {resHeight} from '../../../constant/widthHeight';
// import { GlobalStyle } from '../../../styles/externalStyle'
import { GlobalStyle } from '../../../style/externalStyle'
import { IconString } from '../../../constant/constants';

const BookingDj = ({navigation}) => {
  return (
    <BackgroundImage>
      <View style={GlobalStyle.container}>
        <View style={styles.Header}>
          <View style={styles.AppBar}>
            <TitleHeading
              title={'Booking'}
              isText={true}
              isleftIcon={true}
              leftIcon1={IconString.Back_Icon}
              fontWeight={'bold'}
              isrightIcon1={true}
              pressIconleft={() => navigation.goBack()}
            />
          </View>
          <View style={styles.topTab}>
            <TopBarBooking />
          </View>
        </View>
        {/* <View style={styles.MainContent}></View> */}

        {/* <View style={styles.Footer}></View> */}
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    // backgroundColor:'red'
  },
  MainContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  AppBar: {
    marginVertical: resHeight(25),
  },
  topTab: {
    // width:300,
    // height:400
    flex: 1,
  },
});

export default BookingDj;
