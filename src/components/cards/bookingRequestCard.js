
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FlatButtons from '../flatsButtons';
import { resHeight, resWidth } from '../../constant/widthHeight';
import { Colors1 } from '../../constant/constants';

const BookingRequestCard = ({
  justifyContentbtn,
  isRightBtn, 
  imgAvatar, 
  title, 
  description,
  description1,
  description2, 
  onButton1Press, 
  onButton2Press,
  buttonText1 ,
  buttonText2,
  buttonpad1,
  buttonpad2,
  WidthBtn1,
  WidthBtn2}) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <Image source={imgAvatar} style={styles.avatar} />
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{description1}</Text>
        <Text style={styles.description}>{description2}</Text>
        <View style={[styles.buttonContainer,{
          justifyContent:justifyContentbtn||'space-around'
          }]}>
        <FlatButtons onPress={onButton1Press} title={buttonText1} buttonpad={buttonpad1} WidthBtn={WidthBtn1}/>
        {isRightBtn && (<FlatButtons onPress={onButton2Press} title={buttonText2} buttonpad={buttonpad2} backgroundColor={Colors1.grey} WidthBtn={WidthBtn2}/>)}
        
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 8,
    // margin: 10,
    padding: 5,
    // backgroundColor: 'white',
  },
  leftContent: {
    flex: 1.5,
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  rightContent: {
    flex: 3,
    marginLeft: 10,
    // backgroundColor:'red',
  },
  avatar: {
    
    width: resWidth(110),
    height: resHeight(110),
    borderRadius: 30,
  
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'white'
  },
  description: {
    // marginTop: 5,
    fontSize: 10,
    color:'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    
    // marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default BookingRequestCard;
