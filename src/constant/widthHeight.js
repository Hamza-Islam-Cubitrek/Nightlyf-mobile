import {Dimensions} from 'react-native'

const heightMobileUI = 896;
const widthMobileUI = 414;

    export const resWidth = width => {
    return (Dimensions.get('window').width * width) / widthMobileUI;
  };
  
  export const resHeight = height => {
    return (Dimensions.get('window').height * height) / heightMobileUI;
  };



//   import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-screen';

// // Example usage:
// const myStyle = {
//   width: responsiveWidth(50),        // 50% of the screen width
//   height: responsiveHeight(20),      // 20% of the screen height
//   fontSize: responsiveFontSize(16),  // Responsive font size
// };
