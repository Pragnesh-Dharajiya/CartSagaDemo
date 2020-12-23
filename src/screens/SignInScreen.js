import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {CommonActions} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignInScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userinfo = {username: 'Admin', password: '12345'};
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const _onChangeUsername = (text) => {
    setUsername(text);
  };

  const _onChangePassword = (text) => {
    setPassword(text);
  };

  const _onLogin = () => {
    if (userinfo.username === username && userinfo.password === password) {
      AsyncStorage.setItem('userData', JSON.stringify(userinfo));
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    } else {
      alert('Please enter valid Username and Password');
    }
  };

  return (
    <View style={styles.MainContainer}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{alignItems: 'center'}}>
        <View style={{marginTop: hp('15%')}}>
          <Image
            style={{
              tintColor: 'yellow',
              resizeMode: 'contain',
              height: hp('30%'),
              width: 300,
            }}
            source={require('../assets/image/ic_foodapp.png')}></Image>
        </View>

        <View style={{marginTop: hp('10%'), width: wp('80%')}}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={{
                flex: 1,
                fontSize: 17,
                color: '#FFFFFF',
                marginLeft: wp('2%'),
              }}
              onChangeText={(text) => _onChangeUsername(text)}
              value={username}
              placeholder="Username"
              underlineColorAndroid="transparent"
              placeholderTextColor="#FFFFFF"
            />
          </View>

          <View
            style={{
              height: 1,
              marginVertical: 10,
              backgroundColor: '#9B9A9B',
              width: '100%',
            }}
          />

          <View style={styles.SectionStyle}>
            <TextInput
              style={{
                flex: 1,
                fontSize: 17,
                marginLeft: wp('2%'),

                color: '#FFFFFF',
              }}
              onChangeText={(text) => _onChangePassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="#FFFFFF"
              value={password}
            />
          </View>
          <View style={{alignItems: 'flex-end', marginTop: hp('2%')}}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 14,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: hp('8%')}}>
            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={() => {
                _onLogin();
              }}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: hp('10%'),
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 15,
                alignItems: 'center',
              }}>
              Don't have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 15,
                  marginLeft: 5,
                }}>
                Create Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <SafeAreaView />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#030504',
  },
  loginScreenButton: {
    width: wp('80%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#030504',
    padding: 15,
    fontSize: wp('5%'),
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width: wp('70%'),
  },

  ImageStyle: {
    marginLeft: wp('3%'),
    alignItems: 'center',
  },
});

export default SignInScreen;
