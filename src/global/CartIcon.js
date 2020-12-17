import React, {Component, useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CartIcon = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={{justifyContent: 'center', marginRight: wp('5%')}}>
             <View style={{
            position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

        }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>0</Text>
        </View>
        <Image source={require('../assets/image/ic_carts.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
