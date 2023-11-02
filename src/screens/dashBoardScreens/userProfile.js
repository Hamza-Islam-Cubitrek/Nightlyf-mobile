
import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { GlobalStyle } from '../../style/externalStyle'
import BackgroundImage from '../../components/commonLayOut'
import { resHeight, resWidth } from '../../constant/widthHeight'
import TitleHeading from '../../components/titleAppBarIcons'
// import NavigationString from '../../Constants/NavigationString'
import {IconString, ImageString} from '../../constant/constants'
import CustomTitle from '../../components/titleHeader'
import CreateDivider from '../../components/dividerConst'
import TopNavBar from '../../controllers/navController/topNavBar'

const UserProfile = () => {
  return (
    <BackgroundImage>
    <View style={GlobalStyle.container}>
      <View style={styles.header1}>
        <View style={styles.headerAppBar}>
      <TitleHeading 
      isleftIcon={true}
      isText={true}
      isrightIcon1={true}
      leftIcon1={IconString.Go_Back}
      title={'Club Profile'}
      Icon1={ImageString.Three_Dots}
      fontWeight={'bold'}
      />
      </View>
<View style={styles.avatarHeader}>
    <Image source={ImageString.Avatar_ImageReg} style={{width:resWidth(120),height:resHeight(125)}}/>
    <CustomTitle 
    isRow={false}
    fontWeight={'bold'}
    textColumn1={'Post'}
    textColumn2={'100K'}
    />
        <CustomTitle 
    isRow={false}
    fontWeight={'bold'}
    textColumn1={'Post'}
    textColumn2={'100K'}
    />
        <CustomTitle 
    isRow={false}
    fontWeight={'bold'}
    textColumn1={'Post'}
    textColumn2={'100K'}
    />
</View>
<View style={styles.avatarContent}>
<TitleHeading title={'XS Nightclub'} isText={true} justifyContent={'flex-start'} fontWeight={'bold'} fontSize={16}/>
<TitleHeading title={'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy'} fontSize={14} isText={true} justifyContent={'flex-start'}/>
<TitleHeading title={'Street 307, Batumi, georgia'} isText={true} justifyContent={'flex-start'}/>
<CreateDivider borderWidth={0.4} dividerWidth={resWidth(300)} margin={10} />
</View>
      </View>
      <View style={styles.mainContent1}>
       {/* <View style={styles.topNav}> */}
       <TopNavBar />
       {/* </View> */}
</View>

      
    </View>
     </BackgroundImage>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'red'
  },
  header1:{
    flex:1,
    marginTop:resHeight(40),
    // backgroundColor:'red'
  },
  headerAppBar:{
    marginVertical:resHeight(25),
    // backgroundColor:'yellow'
  },
  avatarHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    // backgroundColor:'yellow'
  },
  avatarContent:{
    paddingTop:resHeight(10),
paddingHorizontal:resWidth(10)
  },
  mainContent1:{
    flex:1,
    // backgroundColor:'pink'
  },
  topNav:{},
  footer1:{
    flex:1,
    // backgroundColor:'yellow'
  }
})

export default UserProfile