


import React, { useState } from 'react';
import {  FlatList,StyleSheet,View } from 'react-native';
import {ImageString,Colors1, IconString} from '../../constant/constants';
// import BookingRequestCard from '../../Components/Cards/BookingRequestCard';
import { resHeight, resWidth } from '../../constant/widthHeight';
import BackgroundImage from '../../components/commonLayOut';
import ChatHeader from '../../components/chatHeader';
// import Colors1 from '../../constant/constants';
import FlatButtons from '../../components/flatsButtons';
import DialogCard from '../../components/dialogCard';


const data = [
  {
    id: '1',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ Groovemaster',
    description: '80$',
 
  },
  {
    id: '2',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ VinylVibes',
    description: '80$',

  },
  {
    id: '3',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ ElectroBeats',
    description: '80$',

  },
  {
    id: '4',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ RockStar',
    description: '80$',
 
  },
  {
    id: '5',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ VinylVibes',
    description: '80$',
 
  },
  // Add more data items as needed
];

const EcommercePricing = () => {
  const renderItem = ({ item }) => (
    <ChatHeader 
    isRow={true}
    textRow1={item.title}
    Img={item.imgAvatar}
    imgHeigth={resHeight(80)}
    imgWidth={resWidth(80)}
    paddingTop={resHeight(20)}
    rtmrgn={resWidth(10)}
    isIconRight={true}
    rightIconName={IconString.Three_Dots_Vertical}
    iconSize={20}
    IconColor={Colors1.white}
    isTextRight={true}
    leadText={item.description}
    // TextRightFontSize={15}
    />
  );

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <BackgroundImage>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    <View style={styles.bottomButton}>
              <FlatButtons title={'Add Product'} onPress={toggleModal} WidthBtn={resWidth(180)}/>
          </View>
          <DialogCard 
          textContent1={'Product Name'}
          textContent2={'Product Price'}
          textContent3={'Upload Image'}
          isModalVisible={isModalVisible} 
          toggleModal={toggleModal} 
          titleDialogBox={'Add Product'} 
          BtnText={'Enter'} 
          widthBtn={resWidth(200)} 
          buttonpad={10}/>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  bottomButton:{
    flex:.4,
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  }
})

export default EcommercePricing;
