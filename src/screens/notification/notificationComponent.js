import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TransparentCard from '../../components/cards/cardConst';
import {resHeight, resWidth} from '../../constant/widthHeight';
import {Colors1, ImageString} from '../../constant/constants';
import FlatButtons from '../../components/flatsButtons';

const NotificationComponent = ({notificationsData, isbtn}) => {
  return (
    <TransparentCard>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.imageAvatar}
            source={notificationsData.imageUrl}
          />
        </View>
        <View style={styles.cardText}>
          <View style={styles.titleRow}>
            <Text style={styles.titleText}>{notificationsData.title}</Text>
            <View style={styles.timestampContainer}>
              <Text style={styles.timestampText}>
                {notificationsData.timestamp}
              </Text>
              <Image
                style={styles.threeDotsIcon}
                source={ImageString.Three_Dots}
              />
            </View>
          </View>
          <Text style={styles.messageText}>{notificationsData.message}</Text>
          {isbtn && (
            <FlatButtons
              title="Add a Review"
              WidthBtn={resWidth(130)}
              buttonHeight={resHeight(40)}
              btnTxtSize={14}
              buttonpad={1}
            />
          )}
        </View>
      </View>
    </TransparentCard>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageAvatar: {
    height: resHeight(100),
    width: resWidth(100),
    marginRight: resWidth(10),
    resizeMode: 'contain',
  },
  cardText: {
    flex: 1,
    paddingRight: resWidth(10),
    marginTop: 10,
  },
  titleRow: {
    flexDirection: 'row',
  },
  titleText: {
    color: Colors1.white,
    fontWeight: 'bold',
  },
  timestampContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  timestampText: {
    color: Colors1.white,
    fontSize: resWidth(10),
    paddingEnd: resWidth(15),
  },
  threeDotsIcon: {
    height: resHeight(15),
    width: resWidth(15),
  },
  messageText: {
    color: Colors1.white,
    fontSize: resWidth(12),
    marginTop: 5,
    marginBottom: resHeight(10),
  },
});
