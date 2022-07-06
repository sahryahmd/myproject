import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
const ForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <View style={{marginVertical: 20, borderBottomWidth: 1}}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Image
            source={require('../img/angle-left.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginVertical: 50,
          marginHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', color: '#000000', fontSize: 30}}>
          Forgot Password
        </Text>
        <Text style={{marginTop: 10, color: '#000000'}}>
          Please type email or Phone Number
        </Text>
        <Text style={{color: '#000000'}}>
          we can help you to reset the password
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Email Or Phone Number"
          style={{marginHorizontal: 20, borderWidth: 1, borderColor: '#D4D6DE'}}
        />
      </View>
      <View
        style={{
          marginVertical: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#62b600',
            width: 370,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            elevation: 5,
          }}>
          <Text style={{color: '#FFFFFF'}}>Send</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text>Already Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{color: '#62b600'}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;
