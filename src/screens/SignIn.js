import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Footer';
import {AuthContext} from '../context/AuthContext';
const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [paswword, setPaswword] = useState('');
  const val = useContext(AuthContext);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../img/logo.png')}
          style={{width: 100, height: 100}}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
          My Grocery
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 25,
            letterSpacing: 2,
            fontWeight: 'bold',
            color: '#000000',
          }}>
          Welcome Back
        </Text>
        <Text style={{marginTop: 10, color: '#000000'}}>
          Sign In To Continue
        </Text>
      </View>
      <Text>{val}</Text>
      <View>
        <TextInput
          value={email}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          style={{
            marginHorizontal: 20,
            marginTop: 50,
            backgroundColor: '#f0f4f7',
            borderRadius: 15,
          }}
          placeholder="Email or Phone Number"
        />
        <TextInput
          value={paswword}
          onChangeText={text => setPaswword(text)}
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            backgroundColor: '#f0f4f7',
            borderRadius: 15,
          }}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text
            style={{
              color: '#62b600',
              textAlign: 'right',
              marginTop: 5,
              marginRight: 15,
            }}>
            Forget Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#62b600',
            height: 50,
            marginVertical: 30,
            marginHorizontal: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
          }}>
          <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Sign In</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 40,
          }}>
          <Text style={{color: '#000000'}}>Don't Have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: '#62b600'}}>Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Footer /> */}
    </ScrollView>
  );
};

export default SignIn;
