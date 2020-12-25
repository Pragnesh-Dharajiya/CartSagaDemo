import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './SignInScreen';

import Splash from './Spalsh';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={Splash} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
