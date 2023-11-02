import {StyleSheet, Text, View, FlatList} from 'react-native';
import {React, useState} from 'react';
import {IconString, ImageString} from '../../constant/constants';
import {resHeight, resWidth} from '../../constant/widthHeight';
import BackgroundImage from '../../components/commonLayOut';
import TitleHeading from '../../components/titleAppBarIcons';
import NotificationComponent from '../notification/notificationComponent';

const NotificationScreen = ({navigation}) => {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'DJ Shadow',
      message: 'Streaming has been ended',
      timestamp: 'Just Now',
    },
    {
      id: '2',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Courtney Henry',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
        timestamp: '2 hr',
    },
    {
      id: '3',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Annette Black',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
        timestamp: '2 hr',
    },
    {
      id: '4',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Devon Lane',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
        timestamp: '2 hr',
    },
    {
      id: '5',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Ralph Edwards',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
        timestamp: '2 hr',
    },
    {
      id: '6',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Theresa Webb',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
        timestamp: '2 hr',
    },
    {
      id: '7',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Marvin McKinney',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
        timestamp: '2 hr',
    },
    {
      id: '8',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Ronald Richards',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
      timestamp: '2 hr',
    },
  ]);

  const addNotification = () => {
    const newNotification = {
      id: String(notifications.length + 1),
      title: `Notification ${notifications.length + 1}`,
      message: `This is a new notification message.`,
    };

    setNotifications(prevNotifications => [
      ...prevNotifications,
      newNotification,
    ]);
  };

  return (
    <BackgroundImage justifyContent={'flex-start'}>
      <View style={{marginTop:50}}>
        <TitleHeading
          isleftIcon={true}
          isText={true}
          isrightIcon1={true}
          title={'Notification'}
          leftIcon1={IconString.Go_Back}
          pressIconleft={() => navigation.goBack()}
          fontWeight={'bold'}
        />
        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <NotificationComponent notificationsData={item} />
          )}
        />
      </View>
    </BackgroundImage>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  appBarContainer: {
    paddingTop: resHeight(40),
    marginBottom: resHeight(35),
  },
});
