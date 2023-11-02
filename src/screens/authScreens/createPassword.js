import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/commonLayOut'
import { GlobalStyle } from '../../style/externalStyle'
import TitleHeading from '../../components/titleAppBarIcons'
 import TransparentCard from '../../components/cards/cardConst'
import Input from '../../components/customFields'
import FlatButtons from '../../components/flatsButtons';


const CreatePassword = () => {
  const handleButtonPress = () => {
    // navigation.navigate('RegisterScreen');
    // Handle button press here
    console.log('Button pressed');
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  return (
    
        <BackgroundImage>
      <View style={GlobalStyle.container}>
        <View style={styles.container1}>
        <TitleHeading title={'Create New Password'} fontSize={24} fontWeight={'bold'} isText={true}/>
        <TransparentCard>
        <Text style={{color:'white'}}>Enter Your E-mail or Phone Number to recover your Password</Text>
        <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            // label="Password"
            placeholder="password"
            // error={errors.password}
            password
          />
           <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            // label="Password"
            placeholder="Confirm password"
            // error={errors.password}
            password
          />
          <View style={styles.container2}>
          <FlatButtons title={'Reset Password'} onPress={handleButtonPress}/>

          </View>
        </TransparentCard>
        </View>
          
      </View>

        </BackgroundImage>
    // 
  )
}

const styles = StyleSheet.create({
  container1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },container2:{
    paddingTop:10,
  }
  
})

export default CreatePassword