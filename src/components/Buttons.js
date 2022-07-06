import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Buttons = () => {
  const navigation = useNavigation();
  return (
    <View style>
      <TouchableOpacity
        style={{
          backgroundColor: '#62b600',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          height: 50,
          borderRadius: 20,
          elevation: 5,
        }}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          height: 50,
          borderBottomWidth: 2,
          borderTopWidth: 1,
          borderColor: '#eeeeee',
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('SignUp')}>
        <Text>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
