import React, {useState, useEffect} from 'react';
import {View, Image, StatusBar, useWindowDimensions} from 'react-native';
const Header = () => {
  const {height, width} = useWindowDimensions();

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../img/gambar1.jpg')}
          style={{
            width: width - 10,
            height: height - 400,
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
