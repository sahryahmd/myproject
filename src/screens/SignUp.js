import React, {useState, useEffect, useContext} from 'react';
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
import {AuthContext} from '../context/AuthContext';
const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paswword, setPaswword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const val = useContext(AuthContext);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <View style={{marginVertical: 20, borderBottomWidth: 1}}>
        <TouchableOpacity>
          <Image
            source={require('../img/logo.png')}
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
          Sign Up
        </Text>
        <Text style={{marginTop: 10, color: '#000000'}}>
          Please type email or Phone Number
        </Text>
      </View>

      <View>
        <Text>{val}</Text>
        <TextInput
          value={name}
          keyboardType="default"
          onChangeText={text => setName(text)}
          placeholder="Full Name"
          style={{
            marginVertical: 10,
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: '#D4D6DE',
          }}
        />
        <TextInput
          value={email}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          style={{
            marginVertical: 10,
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: '#D4D6DE',
          }}
        />
        <TextInput
          value={paswword}
          onChangeText={text => setPaswword(text)}
          placeholder="Password"
          secureTextEntry
          style={{
            marginVertical: 10,
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: '#D4D6DE',
          }}
        />
        <TextInput
          value={birthDate}
          onChangeText={text => setBirthDate(text)}
          placeholder="Date Of birth"
          style={{
            marginVertical: 10,
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: '#D4D6DE',
          }}
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
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}>
            Have Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{color: '#62b600'}}>Sign In Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
