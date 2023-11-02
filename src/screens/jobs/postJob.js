import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import ImageBackground from '../../components/commonLayOut';
import CustomTitle from '../../components/titleHeader';
import TransparentCard from '../../components/cards/cardConst';
import Input from '../../components/customFields';
import FlatButtons from '../../components/flatsButtons';
import {Colors1, IconString, ImageString} from '../../constant/constants';
import {resHeight, resWidth} from '../../constant/widthHeight';
import TitleHeading from '../../components/titleAppBarIcons';
import DateInputField from '../../components/datePickerModel';

const PostJob = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    salary: '',
    expertise: '',
  });
  //   const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.salary) {
      handleError('Please input salary', 'salary');
      isValid = false;
    }

    if (!inputs.expertise) {
      handleError('Please input expertise', 'expertise');
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
        // navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleButtonPress = () => {
    // navigation.navigate('RegisterScreen');
    // Handle button press here
    console.log('Button pressed');
  };
  return (
    <ImageBackground>
      <View style={styles.AppBar}>
        <TitleHeading
          isrightIcon1={true}
          title={'Post Jobs'}
          isText={true}
          isleftIcon={true}
          leftIcon1={IconString.Go_Back}
          fontWeight={'bold'}
          pressIconleft={() => navigation.goBack()}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.registerCard}>
          <TransparentCard>
            <Input
              onChangeText={text => handleOnchange(text, 'salary')}
              // onFocus={() => handleError(null, 'salary')}
              // iconName="email-outline"
              // label="Email"
              textColor={Colors1.black}
              placeholder="Salary"
              // error={errors.email}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'expertise')}
              // onFocus={() => handleError(null, 'fullname')}
              // iconName="account-outline"
              // label="Email"
              textColor={Colors1.black}
              placeholder="Expertise"
              // error={errors.fullname}
            />
            
      <DateInputField placeHolder={'Date'}/>

            <Input
              onChangeText={text => handleOnchange(text, 'phone')}
              // onFocus={() => handleError(null, 'fullname')}
              // iconName="account-outline"
              // label="Email"
              textColor={Colors1.black}
              placeholder="Contact Number"
              // error={errors.fullname}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'jobDis')}
              inputheight={resHeight(100)}
              multiline={true}
              noLines={5}
              // onFocus={() => handleError(null, 'salary')}
              // iconName="email-outline"
              // label="Email"
              textColor={Colors1.black}
              placeholder="Job Discription"
              // error={errors.email}
            />
            <FlatButtons
              title={'Save'}
              onPress={handleButtonPress}
              ColMargin={10}
            />
          </TransparentCard>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,  // backgroundColor:'lightgreen'  
    },
  AppBar: {
    marginTop: resHeight(80),
    marginBottom:resHeight(50)
  },
  // scrollViewContent:{flexGrow: 1,},

  registerCard: {
    flex: 1,
    padding: 20,
    // backgroundColor:'lightgreen'
  },
});
export default PostJob;
