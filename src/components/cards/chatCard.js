import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Colors1, IconString, ImageString} from '../../constant/constants';
import Icon from 'react-native-vector-icons/Ionicons';

const Tile = ({ title, subtitle, trail, lead }) => {
  return (
    <View style={styles.tileContainer}>
        <Image source={trail} style={styles.trail} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image source={IconString.Three_Dots_Vertical} size={30} color={Colors1.grey} />
      {/* <Text style={styles.lead}>{lead}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 16,
    // borderWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft:5
  },
  title: {
    fontSize: 18,
    color:Colors1.white,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color:Colors1.white,
  },
  trail: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // marginLeft: 10,
  },
  lead: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Tile;
