import React from 'react';
import {  StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/appNavigator';

const App = () => {
  return (
    <AppNavigator/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    color:'white'
  }
});

export default App;
