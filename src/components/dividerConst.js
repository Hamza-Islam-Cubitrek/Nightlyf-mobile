import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Divider} from 'react-native-paper';
import {resWidth} from '../constant/widthHeight';
import { Colors1 } from '../constant/constants';

const CreateDivider = ({
	margin, 
	marginBtom, 
	borderWidth, 
	dividerWidth,
	borderColor,
  marginTop
}) => {
  const parents = {
    marginTop:marginTop,
    marginBottom: marginBtom,
    margin: margin || 15,
    // borderColor: borderColor ||'white',
    borderWidth: borderWidth || 0.8,
    width: dividerWidth || resWidth(120),
    // width:Dimensions.get('window').width - 2 * (margin || 15),
  };
  return (
    <View style={[parents,styles.child]}>
      <Divider style={{backgroundColor: borderColor || Colors1.white}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  child: {
    flex:1
    // borderColor:'red'
  },
});
export default CreateDivider;
