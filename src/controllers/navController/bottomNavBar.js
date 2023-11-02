import React from 'react';
import { View, TouchableOpacity, Text,Image} from 'react-native';
import {ImageString} from '../../constant/constants';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';


const tabData = [
    {
      name: 'Home',
      img: ImageString.Home_Tab,
    },
    {
      name: 'Search',
      img: ImageString.Search_Tab,
    },
    {
      name: 'Upload',
      img: ImageString.Add_Tab,
    },
    {
      name: 'Details',
      img: ImageString.Detail_tab,
    },
    {
      name: 'Profile',
      img: ImageString.Profile_Tab,
    },
  
  ];

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'transparent' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const tabInfo = tabData[index];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}
          >
            {/* <Icon
              name={tabInfo.img}
              size={25}
              color={isFocused ? '#FFF' : 'gray'}
            /> */}
             <Image
              source={tabInfo.img}
              style={{ width: 20, height: 20, tintColor: isFocused ? '#1E89A0' : 'gray' }}/>
            {/* <Text style={{ color: isFocused ? '#FFF' : 'gray' }}>{tabInfo.name}</Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


export default CustomTabBar;
