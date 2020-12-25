import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar,
} from 'react-native';

import {CommonActions} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';

const SignInScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const userinfo = {username: 'Admin', password: '12345'};

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
      alert('Username or password is incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF6347" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: '#f0ffff',
          },
        ]}>
        <Text
          style={[
            styles.text_footer,
            {
              color: 'black',
            },
          ]}>
          Username
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="black" size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            onChangeText={(text) => _onChangeUsername(text)}
            value={username}
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}
            autoCapitalize="none"
          />
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              color: 'black',
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="black" size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            onChangeText={(text) => _onChangePassword(text)}
            secureTextEntry={true}
            value={password}
            style={[
              styles.textInput,
              {
                color: 'black',
              },
            ]}
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity>
          <Text style={{color: '#FF6347', marginTop: 15}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              _onLogin();
            }}>
            <View backgroundColor="#ff4500" style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#f0ffff',
                  },
                ]}>
                Sign In
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.signIn,
              {
                borderColor: '#FF6347',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#FF6347',
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4a460',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#191970',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 22,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    paddingBottom: 15,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 16,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // MainContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  //   backgroundColor: '#030504',
  // },
  // loginScreenButton: {
  //   width: wp('80%'),
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 5,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // loginText: {
  //   color: '#030504',
  //   padding: 15,
  //   fontSize: wp('5%'),
  // },
  // SectionStyle: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // width: wp('70%'),
  // },
  // ImageStyle: {
  //   marginLeft: wp('3%'),
  //   alignItems: 'center',
  // },
});

export default SignInScreen;
