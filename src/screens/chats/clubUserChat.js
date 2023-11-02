// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Bubble, Composer, GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import ChatHeader from '../../components/chatHeader';
import BackgroundImage from '../../components/commonLayOut'
import { GlobalStyle } from '../../style/externalStyle';
import {ImageString,Colors1, NavigationString, IconString} from '../../constant/constants'
import Icon from 'react-native-vector-icons/Ionicons';
// import ImageString from '../../constant/constants';
import { resHeight, resWidth } from '../../constant/widthHeight';
import TitleHeading from '../../components/titleAppBarIcons';


const ClubUserChat = ({navigation}) => {
  const [messages, setMessages] = useState([]);

  // Dummy messages for demonstration
  const dummyMessages = [
    {
      _id: 1,
      text: 'Hello, how can I help you?',
      createdAt: new Date(),
      user: {
        _id: 2, // Receiver's ID
        name: 'Receiver',
      },
    },
    {
      _id: 2,
      text: 'Hi, I have a question about your products.',
      createdAt: new Date(),
      user: {
        _id: 1, // User's ID
        name: 'User',
      },
    },
    {
      _id: 3,
      text: 'Sure, ask away!',
      createdAt: new Date(),
      user: {
        _id: 2, // Receiver's ID
        name: 'Receiver',
      },
    },
    // Add more dummy messages here
  ];

  useEffect(() => {
    setMessages(dummyMessages);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
  };
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: Colors1.themeColor, // User message background color
          },
          left: {
            backgroundColor: Colors1.white, // Receiver message background color
          },
        }}
        textStyle={{
          right: {
            color: 'white', // User message text color
          },
          left: {
            color: 'black', // Receiver message text color
          },
        }}
      />
    );
  };
  const renderComposer = (props) => {
    return (
      <Composer
        {...props}
        textInputStyle={{
          color: 'black', // Text color of the input field
        }}
        placeholder="Type a message..."
        onSend={() => {}}
        renderSend={() => (
          <Icon
            name="attach" // Replace with the name of your attachment icon
            size={30}
            color="#3498db" // Color of the attachment icon
            onPress={() => {
              // Handle attachment action (e.g., open file picker)
            }}
          />
        )}
      />
    );
  };
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          borderRadius:15,
          backgroundColor: '#f2f2f2', // Background color of the input toolbar
        }}
      />
   
    
    );
  };
  
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
    <ChatHeader Img={ImageString.Avatar_ImageLog} 
    imgHeigth={resHeight(80)} 
    imgWidth={resWidth(80)} 
    isRow={false} 
    textColumn1={'Jhon Abraham'} 
    textColumn2={'Active now'}
    fontSize1={18}
    fontSize2={12}
    rtmrgn={resWidth(15)}
    />
    
    <GiftedChat
    messages={messages}
    onSend={(newMessages) => onSend(newMessages)}
    user={{
      _id: 1, 
    }}
    renderBubble={renderBubble}
    renderInputToolbar={renderInputToolbar} 
    renderComposer={renderComposer} 
  />
  </View>
  
  </BackgroundImage>
  )
}

export default ClubUserChat

const styles = StyleSheet.create({})