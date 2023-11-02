import React from 'react';
import { Image,View, Text, StyleSheet } from 'react-native';
import ImageString, { IconString } from '../constant/constants'
import Heading from '../components/titleHeader';
import {Colors1} from '../constant/constants';
import { colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatHeader = ({
  Img,
  textColumn1,
  textColumn2,
  isRow,
  imgWidth,
  imgHeigth,
  rtmrgn,
  fontSize1,
  fontSize2,
  textRow1,
  textRow2,
  paddingTop,
  fontWeight1,
  fontWeight2,
  fontColor1,
  fontColor2,
  rightIconName,
  isIconRight,
  iconColor,
  iconSize,
  leadText,
  isTextRight,
  TextRightFontSize
}) => {
  const leadTextStyle ={
    color: Colors1.white, // Change to your preferred text color
    fontSize:TextRightFontSize || 15,
  }
  return (
    
    <View style={[styles.header,{paddingTop:paddingTop,}]}>
        <Image source={Img} style={{
          width:imgWidth,
          height:imgHeigth, 
          marginRight:rtmrgn
          }}/>
        <Heading  
          fontColor1={fontColor1}
          fontColor2={fontColor2}
          fontWeight1={fontWeight1}
          fontWeight2={fontWeight2}
        isRow={isRow}
        textColumn1={textColumn1}
        textColumn2={textColumn2}
        textRow1={textRow1}
        textRow2={textRow2}
        fontSize1={fontSize1}
        fontSize2={fontSize2}
       
        // fontColor={'grey'}

        />
      {/* <Text style={styles.headerText}>Chat App Header</Text> */}
      <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end',flexDirection:'column'}}>
      {isIconRight && <Image source={IconString.Three_Dots_Vertical} size={iconSize||16} style={{color:iconColor||Colors1.white}}/>}
      <View style={{padding:5}}></View>
      {isTextRight && <Text style={leadTextStyle}>{leadText}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    
    flexDirection:'row',
    // height: 50,
    backgroundColor: 'transparent', // Change to your preferred header background color
    justifyContent:'flex-start',
    alignItems: 'center',
  },

});

export default ChatHeader;
