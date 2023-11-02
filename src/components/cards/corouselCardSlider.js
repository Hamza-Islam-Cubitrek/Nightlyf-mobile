import React from 'react';
import { View, Text, Image,StyleSheet, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import { resHeight, resWidth } from '../../constant/widthHeight';
import { Colors1 } from '../../constant/constants';
import FlatButtons from '../flatsButtons';

const CarouselCardSlider = ({ data }) => {
  return (
  
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      activeDotColor={Colors1.themeColor}
      dotColor={Colors1.grey}
      loop={false}
    >
      {data.map((item) => (
        <View style={styles.slide} key={item.id}>
          <View style={styles.card}>
            
            <Image source={item.image} style={styles.image} />
           
            <View style={coroselStyles.imageOverlay}>
          <Text style={[coroselStyles.text1, coroselStyles.textPopular]}>
            Popular Club
          </Text>
          <Text style={[coroselStyles.text1, coroselStyles.textNightClub]}>
            XS NightClub
          </Text>
          <Text style={[coroselStyles.text1, coroselStyles.textPopular]}>
            4.1 Stars
          </Text>
          <View style={coroselStyles.rowButton}>
            <FlatButtons
              title={'Upload Jobs'}
              WidthBtn={resWidth(90)}
              buttonHeight={resHeight(35)}
              buttonpad={1}
              btnTxtSize={12}
            />
          </View>
        </View>
            {/* <Text style={{position:'absolute',color:Colors1.white,bottom:20}}>{item.text}</Text> */}
          </View>
        </View>
      ))}
    </Swiper>
   
  );
};
const coroselStyles = StyleSheet.create({
  corouselCard: {
      paddingTop: resHeight(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
    coroselContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: resWidth(25),
      position: 'relative',
    },
    coroselEditIcon: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      right: 0,
      width: resWidth(40),
      height: resHeight(40),
      // backgroundColor:'red'
    },
    coroselEditImage: {
      height: resHeight(20),
      width: resWidth(20),
    },
    textContent: {
      marginLeft: resWidth(20),
      marginBottom: resHeight(20),
      // backgroundColor:'red',
      width: resWidth(200),
      height: resHeight(130),
      bottom: 0,
      position: 'absolute',
    },
    text1: {
      color: Colors1.white,
    },
    textPopular: {
      fontSize: resWidth(15),
    },
    textNightClub: {
      fontSize: resWidth(20),
    },
    rowButton: {
      paddingTop: 10,
      flexDirection: 'row',
      // alignItems:'flex-start',
      justifyContent: 'space-between',
      // alignContent: 'center',
    },
    imageOverlay: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      bottom: resHeight(40),
      // left: 0,
      // right: 0,
     color:Colors1.white,
    },


})
const styles = StyleSheet.create({ wrapper: {
  // Optional styles for the Swiper container
  
},
slide: {
  margin:10,
},
card: {
  position:'relative',
  borderRadius: resWidth(10),
  padding: resHeight(10),
  shadowColor: '#000',

  alignItems: 'center',
},
image: {
  height: resHeight(230), // Adjust the height as needed
  borderRadius: 10,
  marginBottom: 10,
},})


export default CarouselCardSlider;
