import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import { Colors1, IconString } from '../constant/constants';
import { resHeight, resWidth } from '../constant/widthHeight';

const SearchAppBar = ({
  isLeftIcon,
  iconName,
  mrgrt,
  searchHeight,
  searchWidth,
  inputBackgroundColor,
  inputheight,
  error,
  rightIconImg,
  inputWidth,
  marginTop,
  onFocus = () => {},
  ...props
}) => {
  const leftIconStyle = {
    height: searchHeight || 18,
    width: searchWidth || 18,
    marginRight: mrgrt,
    //  color: Colors1.grey,
  };
  const inputContainer = {
    // color: Colors1.black,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    backgroundColor: inputBackgroundColor || Colors1.white, //'rgba(52, 52, 52, 0.3)'
   width:inputWidth,
    height: inputheight || 40,
    borderColor: error
      ? Colors1.red
      : isFocused
      ? Colors1.darkBlue
      : Colors1.light,
    alignItems: 'center',
  };
//   const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View
      style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',marginTop:marginTop}}>
      <View
        style={{
          backgroundColor: 'white',
          width: resWidth(35),
          height: resHeight(35),
          borderRadius: 20,
        }}
      />
      <View style={inputContainer}>
        {isLeftIcon && <Image source={iconName} style={leftIconStyle} />}
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
        //   secureTextEntry={hidePassword}
          style={{color: Colors1.white}} //marginRight:'auto' in replacemnet of flex:1
          {...props}
        />
      </View>
      <Image source={rightIconImg} style={{ height:resHeight(30),width:resWidth(30)}}/>
    </View>
  );
};

export default SearchAppBar;

const styles = StyleSheet.create({});
