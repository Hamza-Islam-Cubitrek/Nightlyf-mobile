import { StyleSheet, Text, View,Image,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
// import FlatButtons from '../../Components/FlatsButtons'
import BackgroundImage from '../../components/commonLayOut'
import { GlobalStyle } from '../../style/externalStyle'
import Input from '../../components/customFields'
import {ImageString,Colors1, NavigationString, IconString} from '../../constant/constants'
import { resHeight, resWidth } from '../../constant/widthHeight'
import ChatHeader from '../../components/chatHeader'
// import Colors1 from '../../constant/constants'
// import { white } from 'color-name'
import Tile from '../../components/cards/chatCard'
import TitleHeading from '../../components/titleAppBarIcons';


const ClubChatList = ({navigation}) => {
  const data = [
    { title: 'Abcdefghijk', subtitle: 'You: bye...     4:00 PM', trail: ImageString.Avatar_ImageLog },
    { title: 'Abcdefghijk', subtitle: 'You: bye...     4:00 PM', trail: ImageString.Avatar_ImageLog },
    { title: 'Abcdefghijk', subtitle: 'You: bye...     4:00 PM', trail: ImageString.Avatar_ImageLog },
    { title: 'Abcdefghijk', subtitle: 'You: bye...     4:00 PM', trail: ImageString.Avatar_ImageLog },
    { title: 'Abcdefghijk', subtitle: 'You: bye...     4:00 PM', trail: ImageString.Avatar_ImageLog },
    { title: 'Abcdefghijk', subtitle: 'You: bye...     4:00 PM', trail: ImageString.Avatar_ImageLog },
    { title: 'Abcdefghijk', subtitle: 'You: bye...     4:00 PM', trail: ImageString.Avatar_ImageLog },
    { title: 'Abcdefghijk', subtitle: 'You: bye...     4:00 PM', trail: ImageString.Avatar_ImageLog },
    { title: 'Abcdefghijk', subtitle: 'You: bye...     4:00 PM', trail: ImageString.Avatar_ImageLog },
    { title: 'Abcdefghijk', subtitle: 'You: bye...     4:00 PM', trail: ImageString.Avatar_ImageLog },
    { title: 'Abcdefghijk', subtitle: 'You: bye...     4:00 PM', trail: ImageString.Avatar_ImageLog },
    // Add more data items as needed
  ];
  
  return (
    <BackgroundImage>
    <View style={GlobalStyle.container}>
    <TitleHeading  
            isleftIcon={true}
            leftIcon1={IconString.Go_Back}
            pressIconleft={() =>
              navigation.navigate(NavigationString.User_DashBoard)
            }
          />
      <View style={styles.Header}>
        <View style={styles.headerAvatar}>
          <View style={styles.headerAvatar1}>
        <ChatHeader 
        Img={ImageString.Avatar_ImageLog}
        imgWidth={resWidth(80)}
        imgHeigth={resHeight(80)}
        textRow1={'Chat'}
        fontWeight1={'bold'}
        isRow={true}
        rtmrgn={resWidth(10)}
        fontSize1={18}
        
        />
          </View>
          <View style={styles.headerAvatar2}>
          <Image source={ImageString.EditIcon} style={{ height:resHeight(30),width:resWidth(30)}}/>
          </View>
        </View>
        <View style={styles.headerAvatar3}>
          <Input 
          placeholder={'Search...'}
          leftIconColor={Colors1.grey}
          placeholderTextColor={Colors1.grey}
          inputBackgroundColor={'rgba(52, 52, 52, 0.3)'}
          // leftIconbackgroundColor={Colors1.grey}
          
          isLeftIcon={true}
          iconName={IconString.Search} 
          searchHeight={resHeight(22)} 
          searchWidth={resWidth(22)} 
          mrgrt={5}/>
          </View>
          
      </View>
      <View style={styles.MainContent}>
           <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>navigation.navigate(NavigationString.User_Chat)}>
            <Tile
              title={item.title}
              subtitle={item.subtitle}
              trail={item.trail}
              // lead={item.lead}
            />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.Footer}></View>
     
    </View>
    </BackgroundImage>
  )
}

export default ClubChatList

const styles = StyleSheet.create({
  Header:{
    flex:1.4,
    // backgroundColor:'red'
  },
  headerAvatar:{
    // backgroundColor:'pink',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    // flex:1
  },
  headerAvatar1:{
    paddingTop:resHeight(20)
// backgroundColor:'green',
// flexDirection:'row',
// flex:1
  },
  headerAvatar2:{
    height:resHeight(50),
    width:resWidth(50),
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:resHeight(20)
    // color:Colors1.black
  },
  headerAvatar3:{
  },
  MainContent:{
    flex:4,
    // backgroundColor:'yellow'
  },
  Footer:{
    flex:.6,
    // backgroundColor:'green'
  }
})


