import {StyleSheet, View, Image, ScrollView} from 'react-native';
import React from 'react';
import ImageBackground from '../../components/commonLayOut';
import {Colors1, ImageString, IconString, NavigationString} from '../../constant/constants';

import TransparentCard from '../../components/cards/cardConst';
import CustomTitle from '../../components/titleHeader';
import CreateDivider from '../../components/dividerConst';
import {resHeight, resWidth} from '../../constant/widthHeight';
import FlatButtons from '../../components/flatsButtons';
import TitleHeading from '../../components/titleAppBarIcons';


const EditProfile = ({navigation}) => {
  return (
    <ImageBackground >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <TitleHeading
            isleftIcon={true}
        
            leftIcon1={IconString.Go_Back}
            pressIconleft={() =>
              navigation.navigate(NavigationString.User_DashBoard)
            }
          />
        <View style={styles.registerAvatar}>
        
          <View style={styles.avatarProfile}>
            <Image
              source={ImageString.Avatar_ImageLog}
              style={styles.avatarReg}
            />
            <View style={styles.editLowerBound} />
            <View style={styles.editUpperBound}>
              <Image
                source={IconString.Edit_Icon_Profile}
                style={styles.editIconImage}
              />
            </View>
          </View>
          <CustomTitle
            isRow={true}
            textRow1="Puerto"
            textRow2="Rico"
            fontWeight1={500}
            fontWeight2={500}
            fontSize1={resWidth(24)}
            fontSize2={resWidth(24)}
            marginRight1={resWidth(5)}
          />
          <CustomTitle
            isRow={true}
            textRow1="youremail@domain.com |"
            textRow2="+01 234 567 89"
            fontWeight1={500}
            fontWeight2={500}
            fontSize1={resWidth(12)}
            fontSize2={resWidth(12)}
            marginRight1={resWidth(5)}
          />
        </View>
        <View style={styles.registerCard}>
          <TransparentCard>
            <CustomTitle
              textColumn1="About Us"
              textColumn2="Celebrating the rhythm of life one beat at a time. Join me on a sonic journey through the universe of music"
              fontWeight1={500}
              fontSize1={resWidth(18)}
              fontSize2={resWidth(12)}
              marginBottom1={resHeight(5)}
            />
            <CreateDivider
              dividerWidth={resWidth(300)}
              margin={3}
              marginBtom={resHeight(10)}
              marginTop={resHeight(20)}
            />
            <CustomTitle
              textColumn1="Genres"
              textColumn2="Genres are my paint, and every mix is a canvas. From electrifying EDM to soulful jazz, I craft soundscapes that transcend boundaries(genres)"
              fontWeight1={500}
              fontSize1={resWidth(18)}
              fontSize2={resWidth(12)}
              marginBottom1={resHeight(5)}
            />
            <CreateDivider
              dividerWidth={resWidth(300)}
              margin={3}
              marginBtom={resHeight(10)}
              marginTop={resHeight(20)}
            />
            <CustomTitle
              textColumn1="Experience"
              textColumn2="I've fine-tuned my artistry, rocking clubs and festivals worldwide. Expect nothing less than a seasoned maestro behind the turntables."
              fontWeight1={500}
              fontSize1={resWidth(18)}
              fontSize2={resWidth(12)}
              marginBottom1={resHeight(5)}
            />
            <CreateDivider
              dividerWidth={resWidth(300)}
              margin={3}
              marginBtom={resHeight(10)}
              marginTop={resHeight(20)}
            />
            <CustomTitle
              textColumn1="Date of Birth"
              textColumn2="09/4/ 1998"
              fontWeight1={500}
              fontSize1={resWidth(18)}
              fontSize2={resWidth(12)}
              marginBottom1={resHeight(5)}
            />
            <CreateDivider
              dividerWidth={resWidth(300)}
              margin={3}
              marginBtom={resHeight(10)}
              marginTop={resHeight(20)}
            />
            <CustomTitle
              textColumn1="Location"
              textColumn2="Street No 307, Batumi, Georgia"
              fontWeight1={500}
              fontSize1={resWidth(18)}
              fontSize2={resWidth(12)}
              marginBottom1={resHeight(5)}
            />
          </TransparentCard>
          <View style={styles.centeredFlatButtons}>
            <FlatButtons title={'Save'} WidthBtn={resWidth(300)} buttonHeight={50} buttonpad={1}  />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  avatarProfile: {flex: 1, position: 'relative'},
  centeredFlatButtons:{    
    marginTop:resHeight(20),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',},
  registerAvatar: {
    flex: 1,
    alignItems: 'center',
    paddingTop: resHeight(60),
  },
  registerCard: {
    flex: 1,
    padding:resHeight(20),
    // alignItems:'center'
    // backgroundColor:'lightgreen'
  },
  avatarReg: {
    marginBottom: resHeight(10),
    height: resHeight(120),
    width: resWidth(120),
  },
  editIconImage: {
    height: resHeight(20),
    width: resWidth(20),
    resizeMode: 'contain',
  },
  editLowerBound: {
    position: 'absolute',
    bottom: resHeight(5),
    right: resHeight(5.9),
    backgroundColor: Colors1.lightBlack,
    borderRadius: resWidth(25),
    height: resHeight(43),
    width: resWidth(40),
  },
  editUpperBound: {
    position: 'absolute',
    bottom: resHeight(10),
    right: resWidth(10),
    backgroundColor: Colors1.darkGrey,
    borderRadius: resWidth(25),
    height: resHeight(33),
    width: resWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default EditProfile;
