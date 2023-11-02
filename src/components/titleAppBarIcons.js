import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors1} from '../constant/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { resHeight, resWidth } from '../constant/widthHeight';

const TitleHeading = ({
  pressIconright1,
  pressIconright2,
  pressIconleft,
  justifyContent,
  isText,
  title,
  alignCenter,
  fontSize,
  fontColor,
  fontWeight,
  isleftIcon,
  leftIcon1,
  isrightIcon1,
  Icon1,
  isrightIcon2,
  Icon2

}) => {
    const textStyle1 = {
        fontSize: fontSize || 16, // Default font size is 16
        color: fontColor || Colors1.white, // Default font color is black
        fontWeight: fontWeight || 'normal', // Default font weight is normal
        textAlign: alignCenter 
        // ? 'center' : 'left', // Text alignment
      };
  return (
    <View style={{flexDirection: 'row', alignItems:  'center' ,justifyContent:justifyContent ||'space-between'}}>
    {isleftIcon && (
      <TouchableOpacity onPress={pressIconleft}>
      <Image source={leftIcon1} color={'white'} style={{height:resHeight(30), resizeMode:'contain'}} /> 
      </TouchableOpacity>
    )}
     {isText && (<Text style={textStyle1}>{title}</Text>)}
     
    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        {isrightIcon1 && (
          <TouchableOpacity onPress={pressIconright1}>
            <Image source={Icon1} color={'white'} style={{ height: resHeight(30), resizeMode: 'contain' }} />
          </TouchableOpacity>
        )}
        {isrightIcon2 && (
       <View style={{ marginLeft: resWidth(15) }}>
       <TouchableOpacity onPress={pressIconright2}>
         <Image source={Icon2} color={'white'} style={{ height: resHeight(30), resizeMode: 'contain' }} />
       </TouchableOpacity>
     </View>
        )}
      </View>
  </View>
  )
}


export default TitleHeading

