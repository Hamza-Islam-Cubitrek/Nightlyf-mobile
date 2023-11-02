import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { resHeight, resWidth } from '../../constant/widthHeight';

const HorizontalCard = ({ title, imageUri, onPress }) => {
  const card = {
    flex:1,
    height:resHeight(220),
    borderRadius: 10,
    margin: 10,

  }
  const image={
    width: resWidth(140),
    height: resHeight(200), 
    borderRadius: 10,
    marginBottom: 10,
  }

 const buttonText= {
    textAlign:'center',
    color: 'white',
  }

  return (
    <View style={card}>
      <TouchableOpacity onPress={onPress} >
      <Image source={ imageUri } style={image} resizeMode='cover'/>
        <Text style={buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};



export default HorizontalCard;
