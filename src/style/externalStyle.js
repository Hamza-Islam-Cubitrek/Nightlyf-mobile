import { StyleSheet } from 'react-native'
import { resWidth, resHeight } from '../constant/widthHeight'
import {Colors1} from '../constant/constants';

const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    // alignItems:'center',
    // alignContent:'center'
    // justifyContent:'center'
  },

});
const Style1Text=StyleSheet.create({
  Text12: {},
  Text12Bold: {
    paddingLeft: 2, 
    fontWeight: 'bold', 
    color: Colors1.themeColor, 
    color: "white"
  }
})

const RegisterLoginStyle = StyleSheet.create({

  titleContain: {
    flex: .4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    // backgroundColor:'red'
  },
  bannerContain: {
    flex: 2,
    justifyContent: 'space-around',
    // backgroundColor:'red'
  },
  buttonContain: {
    flex: 1,
    justifyContent: 'center',

  },
  buttonWrapper: {
    marginVertical: 10,
  },

  text1: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  text2: {
    fontSize: resHeight(30),
    color: 'white',
  },
  text3: {
    flex:.1,
    fontSize: resHeight(24),
    // backgroundColor:'yellow',
    color: 'white',
    paddingTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  text4: {
flex:.3,
    color: 'white',
    textAlign: 'center',
    // backgroundColor:'pink'
  },
  registerbanner: {
    flex:1,
    borderRadius: 12,
    width: resWidth(350)
  }

});

export {
  GlobalStyle,
  RegisterLoginStyle
}