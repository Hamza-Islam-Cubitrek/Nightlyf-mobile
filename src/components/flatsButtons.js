import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import {Colors1} from '../constant/constants';
import {resHeight, resWidth} from '../constant/widthHeight';

const FlatButtons = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  disabled,
  transparentBorder,
  ColMargin,
  rtMarg,
  WidthBtn,
  iconSource,
  showIcon,
  buttonpad,
  buttonHeight,
  btnTxtSize
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          marginRight: rtMarg,
          width: WidthBtn,
          marginVertical: ColMargin,
          padding: buttonpad || 18,
          backgroundColor: backgroundColor || Colors1.themeColor,
          height:buttonHeight,
        },
        disabled && styles.disabledButton,
        transparentBorder && styles.borderWidth,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {showIcon && <Image source={iconSource} style={styles.iconStyle} />}
        <Text style={[styles.buttonText, {color: textColor || '#fff',fontSize:btnTxtSize}]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.5,
  },
  borderWidth: {
    backgroundColor: 'transparent',
    padding: 18,
    // flexDirection:'column',
    // justifyContent:'space-around',
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 15,
  },
  iconStyle: {
    height: resHeight(20),
    width: resWidth(20),
    marginRight: 5,
  },
});

export default FlatButtons;
