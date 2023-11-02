
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
// import BackgroundImageText from '../../../components/backgroundImageText';
// import {Icon} from 'react-native-vector-icons/Icon';
// import {BookingCards, CorouselComponents} from './userComponents';
import HorizontalCard from '../../../components/cards/customCard';
import CustomTitle from '../../../components/titleHeader';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-screen';
import CarouselCardSlider from '../../../components/cards/corouselCardSlider';

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
const cardData1 = [
  {
    title: 'Envy Lounge',
    // price: 19.99,
    imageUri: require('../../../../assets/images/card2.png'),
  },
  {
    title: 'Glitter Club',
    // price: 29.99,
    imageUri: require('../../../../assets/images/card3.png'),
  },
  {
    title: 'Liv',
    // price: 29.99,
    imageUri: require('../../../../assets/images/Card1.png'),
  },
  // Add more card objects as needed
];

const SearchTab = ({navigation}) => {
  const handleButton = () => {
    console.log('Stream Pressed');
    console.log('View Bid Pressed');
  };
  const CircleImageListItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity >
        {/* <Image source={item.image} style={styles.circleImage} /> */}
        <Text style={styles.itemText}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
  const data = [
    {
      id: '1',
      image: ImageString.Club_DashBoard_BackImage,
      text: 'Hit DJ',
      // route: NavigationString.Pricing,
    },
    {
      id: '2',
      image: ImageString.Club_DashBoard_BackImage,
      text: 'Trending DJ',
      // route: NavigationString.BookingList,
    },
    {
      id: '3',
      image: ImageString.Club_DashBoard_BackImage,
      text: 'Latest DJ',
      // route: NavigationString.BookingList,
    },
    {
      id: '4',
      image: ImageString.Club_DashBoard_BackImage,
      text: 'Top Promoters',
      // route: NavigationString.BookingList,
    },

  ];
  
  return (
    <BackgroundImage>
      <ScrollView style={styles.container}>
        <View style={styles.appBarContainer}>
          <TitleHeading
            title={'Explore'}
            isText={true}
            isleftIcon={true}
            isrightIcon1={true}
            leftIcon1={IconString.Side_Nav}
            pressIconright1={() =>
              navigation.navigate(NavigationString.Club_List)
            }
            Icon1={IconString.Search}
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
        <View style={{flex:1,height:resHeight(300)}}>
          <CarouselCardSlider data={data}/>
        </View>
        {/* <CorouselComponents /> */}
        {/* <View style={biddingOverView.biddingContainer}> */}
        {/* <BookingCards/> */}
        {/* </View> */}
        <View style={styles.rowText}>
          <Text style={styles.bookingText}>Find Promotors</Text>
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
        <View style={styles.rowText}>
          <Text style={styles.bookingText}>Find DJ's</Text>
          <Text
            onPress={() => navigation.navigate(NavigationString.Booking)}
            style={{color: 'white'}}>
            View All
          </Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={coroselCardStyle.container1}>
          {cardData1.map((card, index) => (
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
    marginBottom: resHeight(40),
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
    // backgroundColor:'white',
    width: '100%',
    height:resHeight(30),
    marginTop:resHeight(20),
    // paddingTop: resHeight(20),
    justifyContent:'center',
    // alignItems:'center'
  },
  itemContainer: {
    borderRadius:resWidth(30),
    backgroundColor:Colors1.grey,
    
    // width:resWidth(80),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  itemText: {
    paddingHorizontal:10,
    color: Colors1.white,
    fontSize: resWidth(13),
    textAlign: 'center',
    fontWeight:'bold'
    // marginTop: resHeight(10),
  },
  appBarContainer: {
    paddingTop: 30,
  },
  rowText: {
    // backgroundColor:'yellow',
    paddingTop: resHeight(10),
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
 
  circleImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

});

export default SearchTab;
