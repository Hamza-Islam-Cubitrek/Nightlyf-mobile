import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import BackgroundImage from '../../../components/commonLayOut';
import {resHeight, resWidth} from '../../../constant/widthHeight';
import TitleHeading from '../../../components/titleAppBarIcons';
import {
  Colors1,
  IconString,
  ImageString,
  NavigationString,
} from '../../../constant/constants';
// import FlatButtons from '../../../components/flatsButtons';
import BackgroundImageText from '../../../components/backgroundImageText';
// import {Icon} from 'react-native-vector-icons/Icon';
import {BookingCards, CorouselComponents} from './userComponents';
import HorizontalCard from '../../../components/cards/customCard';
import CustomTitle from '../../../components/titleHeader';

const cardData = [
  {
    title: 'DJ Pop',
    // price: 19.99,
    imageUri: require('../../../../assets/images/Card1.png'),
  },
  {
    title: 'DJ Electronic',
    // price: 29.99,
    imageUri: require('../../../../assets/images/card2.png'),
  },
  {
    title: 'DJ Vine',
    // price: 29.99,
    imageUri: require('../../../../assets/images/card3.png'),
  },
  // Add more card objects as needed
];

const UserDashBoard = ({navigation}) => {
  const handleButton = () => {
    console.log('Stream Pressed');
    console.log('View Bid Pressed');
  };
  const CircleImageListItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
        <Image source={item.image} style={styles.circleImage} />
        <Text style={styles.itemText}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
  const data = [
    {
      id: '1',
      image: ImageString.Avatar_ImageLog,
      text: 'Club Rates',
      route: NavigationString.Pricing,
    },
    {
      id: '2',
      image: ImageString.Avatar_ImageLog,
      text: 'Reviews',
      route: NavigationString.Review_Screen,
    },
    {
      id: '3',
      image: ImageString.Avatar_ImageLog,
      text: 'Gallery Upload',
      route: NavigationString.UploadMedia,
    },
    {
      id: '4',
      image: ImageString.Avatar_ImageLog,
      text: 'My Wallet',
      route: NavigationString.Wallet,
    },
    {
      id: '5',
      image: ImageString.Avatar_ImageLog,
      text: 'Request',
      route: NavigationString.RequestDj,
    },
  ];
  return (
    <BackgroundImage>
      <ScrollView style={styles.container}>
        <View style={styles.appBarContainer}>
          <TitleHeading
            title={'Club DashBoard'}
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
            pressIconright2={()=>navigation.navigate(NavigationString.NotificationScreen)}
          />
          <View style={styles.sliderAvatar}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              horizontal={true}
              renderItem={({item}) => <CircleImageListItem item={item} />}
              contentContainerStyle={styles.flatListContainer}
              showsHorizontalScrollIndicator={false}

              // style={styles.flatList}
            />
          </View>
        </View>
        <CorouselComponents pressEdit={()=>navigation.navigate(NavigationString.EditProfile)} pressUploadJob={()=>navigation.navigate(NavigationString.Post_Job)}/>
        <View style={biddingOverView.biddingContainer}>
        <BookingCards/>
        </View>
        <View style={styles.rowText}>
          <Text style={styles.bookingText}>Booking History</Text>
          <Text
            onPress={() => navigation.navigate(NavigationString.Booking)}
            style={{color: 'white'}}>
            View All
          </Text>
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
      </ScrollView>
    </BackgroundImage>
  );
};

const biddingOverView = StyleSheet.create({
  biddingContainer: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: resHeight(10),
    position: 'relative',
    // paddingLeft: resWidth(10)
  },
});

const coroselCardStyle = StyleSheet.create({
  container1: {
    // backgroundColor:'red',
    marginBottom: resHeight(60),
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  flatListContainer: {},
  sliderAvatar: {
    flex: 1,
    width: '100%',
    paddingTop: resHeight(20),
  },
  appBarContainer: {
    paddingTop: 30,
  },
  rowText: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  bookingText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  container1: {
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 10,
    height: 300,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  circleImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  itemText: {
    color: 'white',
    fontSize: resWidth(10),
    textAlign: 'center',
    marginTop: resHeight(10),
  },
});

export default UserDashBoard;
