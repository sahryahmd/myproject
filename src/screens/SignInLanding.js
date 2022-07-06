import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import Buttons from '../components/Buttons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
const SignInLanding = () => {
  const {height, width} = useWindowDimensions();
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />
      <Title />
      <Buttons />
      <Footer />
    </ScrollView>
  );
};

export default SignInLanding;
