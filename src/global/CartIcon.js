import React, {Component, useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

const CartIcon = ({props, cartItems}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Cart')}
        style={{justifyContent: 'center', marginRight: wp('5%')}}>
        <View
          style={{
            position: 'absolute',
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: 'rgba(95,197,123,0.8)',
            left: 20,
            bottom: 17,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {cartItems.cartItemsReducer.length}
          </Text>
        </View>
        <Image source={require('../assets/image/ic_carts.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
