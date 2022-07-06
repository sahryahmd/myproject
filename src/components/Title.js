import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
const Title = () => {
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
      <Text style={{fontWeight: 'bold', fontSize: 30, color: '#000000'}}>
        Welcome To
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 30, color: '#000000'}}>
        Grocery
      </Text>
      <Text style={{marginVertical: 10, letterSpacing: 1}}>
        shop everything you need without the trip to the supermarket
      </Text>
    </View>
  );
};

export default Title;
