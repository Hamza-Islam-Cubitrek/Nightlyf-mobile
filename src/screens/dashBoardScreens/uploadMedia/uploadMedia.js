import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../../../components/commonLayOut'
// import { GlobalStyle } from '../../../Styles/externalStyle'
import {ImageString,Colors1, IconString, NavigationString} from '../../../constant/constants'
import FlatButtons from '../../../components/flatsButtons'
import { resHeight, resWidth } from '../../../constant/widthHeight'
import TitleHeading from '../../../components/titleAppBarIcons';
// import Colors1 from '../../../constant/constants'

const UploadMedia = ({navigation}) => {
  return (
<BackgroundImage>
<TitleHeading
            
            isleftIcon={true}
            leftIcon1={IconString.Go_Back}
            pressIconleft={() =>
              navigation.navigate(NavigationString.User_DashBoard)
            }
          />
    <View style={styles.container}>
    <Image source={ImageString.Avatar_ImageReg} style={styles.avatr}/>
    <Text style={styles.textTitle}>Upload File</Text>
    <Text style={styles.textDes}>You can Upload Image, Music, Video</Text>
    <View style={styles.btns}>
        <FlatButtons title={'Upload Music'} ColMargin={10} WidthBtn={resWidth(300)}/>
        <FlatButtons title={'Upload Image'} ColMargin={10} WidthBtn={resWidth(300)}/>
        <FlatButtons title={'Upload Video'} ColMargin={10} WidthBtn={resWidth(300)}/>
    </View>

    </View>
</BackgroundImage>
  )
}

export default UploadMedia

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        marginTop:150,
        alignItems:'center',
        // backgroundColor:'white'
    },
    avatr:{
        height:resHeight(130),
        width:resWidth(130),
        marginBottom:resHeight(10)
    },
    textTitle:{
        marginVertical:resHeight(10),
        color:Colors1.white,
        fontSize:resHeight(24),
        fontWeight:'bold',
        
        
    },
    textDes:{
        color:Colors1.white,
        fontSize:12,
    },
    btns:{

        justifyContent: 'center', 
        alignItems: 'center', 
        // backgroundColor: 'red'
    }
})