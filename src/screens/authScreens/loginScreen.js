import React, {useState} from 'react';
import { View, Text ,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native'
import { CheckBox } from '@rneui/themed';
import FlatButtons from '../../components/flatsButtons'
import BackgroundImage from '../../components/commonLayOut'
import Input from '../../components/customFields'
import CreateDivider from '../../components/dividerConst'
import { NavigationString,Colors1, ImageString } from '../../constant/constants';
import { resWidth } from '../../constant/widthHeight';

const LoginScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
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
}
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
  const [isSelected, setSelection] = useState(false);
  const widths = 150;
  return (
<BackgroundImage>
            <SafeAreaView style={{padding:40}}>
            <View style={styles.contentAvatar}>
              <Text style={styles.loginText}>Wellcome Back!</Text>
              <View style={{padding:10}}/>
              <Text style={{color:Colors1.grey,paddingLeft:15}}>Glad to see you back! Enter your email address and password to log in to your account.</Text>
              <View style={{padding:10}}/>
              <Text style={{color:Colors1.grey}}>Email</Text>
              <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            // label="Email"
            placeholder="example@gmail.com"
            error={errors.email}
          />
          <View style={{padding:10}}></View>
          <Text style={{color:Colors1.grey}}>Password</Text>
          
                        <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            // label="Email"
            placeholder="Password"
            error={errors.password}
          />
                    {/* <View style={styles.forgotPass}> 

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Remember Me</Text>

    </View>
  
          <Text onPress={()=>navigation.navigate(NavigationString.Recover_Pass)} style={{color:'white'}}>Forgot Password</Text>
          </View> */}

<View style={styles.rememberForgotContainer}>
          <View style={styles.checkbox}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
            />
          </View>
          <Text style={styles.rememberText}>Remember Me</Text>
          <TouchableOpacity onPress={() => navigation.navigate(NavigationString.Recover_Pass)}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

           <View style={{padding:10}}></View>
           <FlatButtons title={'Sign In'} onPress={()=>navigation.navigate(NavigationString.Bottom_Controller)}/>
          <View style={{flexDirection:'column',alignItems:'center'}}>
          <View style={styles.divider}>
          <CreateDivider />
          <Text style={{color:'white',}}>OR</Text>
          <CreateDivider />
          </View>
          <View style={styles.socialClicks}>
          <FlatButtons title={'FaceBook'} 
          onPress={handleButtonPress} 
          showIcon={true} 
          iconSource={ImageString.FaceBook_Logo} 
          transparentBorder={true}
          WidthBtn={resWidth(150)}
          />
          <View style={{padding:resWidth(10)}}></View>
          <FlatButtons title={'Google'} 
          onPress={handleButtonPress} 
          showIcon={true} 
          iconSource={ImageString.Google_Logo} 
          transparentBorder={true}
          WidthBtn={resWidth(150)}
          />
          </View>

          </View>
          <View style={{padding:10}}></View>
          <View style={styles.Textloginbtn}>
          <Text style={styles.TextLogin}>Don’t have an account?</Text>
<TouchableOpacity
onPress={()=>navigation.navigate(NavigationString.Register_Screen)}
>
  <Text style={styles.Text12Bold}>Sign Up</Text>
  </TouchableOpacity>

           </View>
            </View>
            </SafeAreaView>
</BackgroundImage>
  )
}

const styles = StyleSheet.create({
  contentAvatar:{
      // alignItems: 'center',
      paddingBottom:10,

      flexDirection:'column',
  },
  socialClicks:{
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'gray',
    // padding:10
    // alignItems:'center'
  },
  divider:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    margin: 'auto',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkbox: {
    width: 10,
    height: 10,
  },
  forgotPass:{
    flexDirection:'row',
    // backgroundColor:'yellow',
    justifyContent:'space-between',
    alignContent:'center'
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    // // alignSelf: 'center',
    // width:10,
    // height:10
  },
  label: {
    // margin: 8,
    color:'white'
  },
  rememberText: {
    color: 'white',
    paddingLeft: 30,
    marginTop: 15,
  },
  forgotText: {
    color: 'white',
    paddingLeft: 45,
    marginTop: 15,
  },
  loginText:{fontSize:24,fontWeight:'bold',color:'white',paddingLeft:15},
  textBtnStyle:{
    color: Colors1.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  Textloginbtn:{
  
    paddingTop:5,
    paddingRight:resWidth(20),
    flexDirection:'row',
    justifyContent:'center'
  },
  TextLogin:{color:Colors1.white},
  Text12Bold: {
    paddingLeft: 2, 
    fontWeight: 'bold', 
    color: Colors1.themeColor, 
    // color: "white"
  }
})

export default LoginScreen