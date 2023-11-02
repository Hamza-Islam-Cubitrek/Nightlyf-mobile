import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import BackgroundImage from '../../../components/commonLayOut';
import {resHeight, resWidth} from '../../../constant/widthHeight';
import TitleHeading from '../../../components/titleAppBarIcons';
import {
  Colors1,
  IconString,
  ImageString,
  NavigationString,
} from '../../../constant/constants';
import HorizontalCard from '../../../components/cards/customCard';
import CreateDivider from '../../../components/dividerConst';
import FlatButtons from '../../../components/flatsButtons';
import ChatHeader from '../../../components/chatHeader';
import FeedComponents from './feedComponents';
import SearchAppBar from '../../../components/searchAppBar';

const cardData = [
  {
    title: 'XS Nightclub',
    // price: 19.99,
    imageUri: require('../../../../assets/images/Card1.png'),
  },
  {
    title: 'House of Yes',
    // price: 29.99,
    imageUri: require('../../../../assets/images/card2.png'),
  },
  {
    title: 'Fubar nightclub',
    // price: 29.99,
    imageUri: require('../../../../assets/images/card3.png'),
  },
  // Add more card objects as needed
];

const UserDetail = ({navigation}) => {
  const handleButton = () => {
    console.log('Stream Pressed');
    console.log('View Bid Pressed');
  };

  return (
    <BackgroundImage>
      <ScrollView style={styles.container}>
        <View style={styles.appBarContainer}>
          <TitleHeading
            title={'Feed'}
            isText={true}
            isleftIcon={true}
            isrightIcon1={true}
            isrightIcon2={true}
            leftIcon1={IconString.Side_Nav}
            pressIconright1={() =>
              navigation.navigate(NavigationString.Club_List)
            }
            Icon1={IconString.Chat}
            Icon2={IconString.Bell}
          />
          <SearchAppBar
            isLeftIcon={true}
            iconName={IconString.Search}
            inputheight={35}
            inputWidth={220}
            rightIconImg={IconString.Filter_Icon}
            mrgrt={resWidth(5)}
            inputBackgroundColor={'transparent'}
            marginTop={resHeight(18)}
          />
        </View>

        <View style={styles.rowText}>
          <Text style={styles.bookingText}>What's New</Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={coroselCardStyle.container1}>
          {cardData.map((card, index) => (
            <HorizontalCard
              key={index}
              title={card.title}
              // price={card.price}
              imageUri={card.imageUri}
              onPress={() => {
                // Handle button press for this card
              }}
            />
          ))}
        </ScrollView>
        <CreateDivider
          dividerWidth={resWidth(345)}
          margin={1}
          borderWidth={0.1}
          borderColor={Colors1.grey}
        />
        <View style={styles.yourPost}>
          <View style={styles.rowText}>
            <Text style={styles.bookingText}>Your Posts</Text>
            <FlatButtons
              title={'Live'}
              buttonHeight={resHeight(25)}
              buttonpad={1}
              WidthBtn={resWidth(70)}
            />
          </View>

          <ChatHeader
            Img={ImageString.Avatar_ImageLog}
            imgHeigth={resHeight(70)}
            imgWidth={resWidth(70)}
            rtmrgn={resWidth(10)}
            isRow={true}
            textRow1={'Whats On Your Mind?'}
            fontWeight1={'bold'}
          />
        </View>
        <CreateDivider
          dividerWidth={resWidth(345)}
          margin={4}
          borderWidth={0.1}
          // borderColor={Colors1.themeColor}
        />
        <View style={styles.feedCommentCard}>
          <FeedComponents />
          <FeedComponents />
        </View>
      </ScrollView>
    </BackgroundImage>
  );
};

const coroselCardStyle = StyleSheet.create({
  container1: {
    // backgroundColor:'red',
    marginBottom: resHeight(30),
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  appBarContainer: {
    paddingTop: 30,
    marginBottom: 20,
  },
  rowText: {
    paddingVertical: resHeight(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  bookingText: {
    // fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  yourPost: {
    flex: 1,
    marginBottom: resHeight(20),
  },
  feedCommentCard: {flex: 1, width: resWidth(350), marginBottom: resHeight(50)},
});

export default UserDetail;
