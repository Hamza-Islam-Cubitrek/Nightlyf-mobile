import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {GallaryTab,
    MusicTab,
    VidTab} from '../../navigation/index'
// import BackgroundImage from '../CommonLayOut';
import { resHeight, resWidth } from '../../constant/widthHeight';
import {Colors1,IconString,NavigationString} from '../../constant/constants';
import Icon from 'react-native-vector-icons/Ionicons';
// import NavigationString from '../../constant/constants';
// Import your tab screens here


const Tab = createMaterialTopTabNavigator();

const TopNavBar = () => {
  return (
    // <BackgroundImage>
    <Tab.Navigator initialRouteName={NavigationString.Image_Tab} screenOptions={{tabBarLabelStyle:{fontSize:10,color:Colors1.white},tabBarItemStyle: { width: resWidth(120)},tabBarStyle: { backgroundColor: 'transparent',height:resHeight(50) },}}>
      <Tab.Screen name={NavigationString.Image_Tab} component={GallaryTab} options={{tabBarLabel:'', tabBarIcon:() => <Image source={IconString.Gallery} style={styles.iconContain}/>}}/>
      <Tab.Screen name={NavigationString.Music_Tab} component={MusicTab} options={{tabBarLabel:'',tabBarIcon:() => <Image source={IconString.Music} style={styles.iconContain}/>}}/>
      <Tab.Screen name={NavigationString.Video_Tab} component={VidTab} options={{tabBarLabel:'',tabBarIcon:() => <Image source={IconString.Video} style={styles.iconContain}/>}}/>
    </Tab.Navigator>
    // </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container:{
    alignSelf: "center",
    width: resWidth(400),
    borderRadius: 30,
    borderColor: "blue",
    backgroundColor: "transparent",
    elevation: 5, // shadow on Android
    shadowOpacity: .10, // shadow on iOS,
    shadowRadius: 4, // shadow blur on iOS
  },
  iconContain:{
    color:'white',
    fontSize:15
  },

})

export default TopNavBar;
