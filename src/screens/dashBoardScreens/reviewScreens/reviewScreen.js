import { FlatList, StyleSheet,View} from 'react-native';
import React, {  useState } from 'react';
import BackgroundImage from '../../../components/commonLayOut';
import TitleHeading from '../../../components/titleAppBarIcons';
import {  IconString, ImageString, NavigationString} from '../../../constant/constants';
import { resHeight, resWidth } from '../../../constant/widthHeight';
import ReviewComponent from './reviewComponent';

const ReviewScreen = ({navigation}) => {

const reviews = [
  {
    id: '1',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'Lisa:',
    message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More',
    star: '★★★★☆ (4.2)'
  },
{
    id: '2',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'Sarah:',
    message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More ',
    star: '★★★★☆ (4.2)'
},
{
    id: '3',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'Maria:',
    message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More  ',
    star: '★★★★☆ (4.2)'
},
{
    id: '4',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'cataline:',
    message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More ',
    star: '★★★★☆ (4.2)'
},
{
    id: '5',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'Jenny:',
    message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More',
    star: '★★★★☆ (4.2)'
},
{
  id: '6',
  imageUrl: ImageString.Avatar_ImageLog,
  title: 'Jenny:',
  message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More',
  star: '★★★★☆ (4.2)'
},
]

  return (
    <BackgroundImage justifyContent={'flex-start'}>
        <View style={styles.appBarContainer}>
      <TitleHeading isleftIcon={true} 
      isText={true} 
      title={'View Reviews'}
      leftIcon1={IconString.Go_Back}
      fontWeight={'bold'}
      pressIconleft={() => navigation.navigate(NavigationString.User_DashBoard)}
      />
</View>
<FlatList
                data={reviews}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ReviewComponent reviewsData={item} />
                )}
            />
    </BackgroundImage>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
    appBarContainer:{
      paddingTop:resHeight(40),
      marginBottom:resHeight(35)
    },

});

