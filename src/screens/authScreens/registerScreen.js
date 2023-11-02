import { StyleSheet, Text, View, Image, TouchableOpacity,KeyboardAvoidingView,ScrollView  } from 'react-native'
import React from 'react'
import ImageBackground from '../../components/commonLayOut'
import { GlobalStyle } from '../../style/externalStyle'
import {Colors1,NavigationString,ImageString} from '../../constant/constants'

import TransparentCard from '../../components/cards/cardConst'
import Input from '../../components/customFields'
import FlatButtons from '../../components/flatsButtons'
import CustomTitle from '../../components/titleHeader'
import CreateDivider from '../../components/dividerConst'
import { resHeight, resWidth } from '../../constant/widthHeight'

const RegisterScreen = ({navigation}) => {
    const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  const handleButtonPress = () => {
    // navigation.navigate('RegisterScreen');
    // Handle button press here
    console.log('Button pressed');
  };
  return (
<ImageBackground>
<ScrollView contentContainerStyle={styles.scrollViewContent}>

      <View style={styles.registerAvatar}>
      <CustomTitle 
      isRow={true}
      textRow1='Create'
      textRow2='Your Profile'
      fontWeight1={'bold'}
      fontSize1={24}
      fontSize2={24}/>
        <Image source={ImageString.Avatar_ImageLog} style={styles.avatarReg}></Image>
      </View>
      <View style={styles.registerCard}>
      <TransparentCard>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            // label="Email"
            placeholder="Name"
            error={errors.email}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            // label="Email"
            placeholder="User Name"
            error={errors.fullname}
          />
          <Input
           keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            // label="Email"
            placeholder="Phone Number"
            error={errors.phone}
          />
         <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            // label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <FlatButtons title={'Sign Up'} onPress={handleButtonPress} ColMargin={10}/>
      </TransparentCard>
      </View>
      <View style={styles.buttonSect}>
      <View style={styles.divider}>
           <CreateDivider />
           <Text style={{color:'white',}}>OR</Text>
           <CreateDivider />

           </View>
           <View style={styles.btnRow}>
            <FlatButtons title={'FaceBook'} onPress={handleButtonPress} transparentBorder={true} WidthBtn={resWidth(150)} rtMarg={10} showIcon={true} iconSource={ImageString.FaceBook_Logo}/>
            <FlatButtons title={'Google'} onPress={handleButtonPress} transparentBorder={true} WidthBtn={resWidth(150)} showIcon={true} iconSource={ImageString.Google_Logo}/>
           </View>
           <View style={styles.Textloginbtn}>
          <Text style={styles.TextLogin}>Already Have An Account?</Text>
<TouchableOpacity
onPress={()=>navigation.navigate(NavigationString.Login_Screen)}
>
  <Text style={styles.Text12Bold}>Login</Text>
  </TouchableOpacity>

           </View>
        

      </View>
    {/* </View> */}
    {/* </KeyboardAvoidingView> */}
    </ScrollView>
</ImageBackground>
  )
}



const styles = StyleSheet.create({
  // scrollViewContent:{flexGrow: 1,},
  registerAvatar:{
    flex:1,
    alignItems:'center',
    paddingTop:resHeight(60),
  },
  registerCard:{
    flex:0.1,
    // backgroundColor:'lightgreen'
  },
  buttonSect:{
    flex:1,
    marginTop:resHeight(80)

  },

  avatarReg:{
    marginTop:resHeight(10),
    height:resHeight(120),
    width:resWidth(120),
  },
    divider:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:resHeight(10),
    // backgroundColor:'pink'
  },
  btnRow:{
    justifyContent:'center',
    flexDirection:'row',
// backgroundColor:'yellow'
  },
  Textloginbtn:{
    paddingTop:5,
    paddingRight:resWidth(20),
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  TextLogin:{
    color:"white"
  },
  Text12Bold: {
    paddingLeft: 2, 
    fontWeight: 'bold', 
    // color: Colors1.themeColor, 
    color: Colors1.themeColor
  }
})
export default RegisterScreen
