import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransparentCard = ({ children }) => {
  return (
    <View style={styles.card}>
{children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)', 
    // opacity:0.2,
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginTop:16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
});

export default TransparentCard;
