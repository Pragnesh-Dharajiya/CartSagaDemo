import React, {useState, useEffect} from 'react';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import RootStackScreen from '../screens/RootStackScreen';

import DrawerScreen from '../screens/DrawerScreen';

const Stack = createStackNavigator();

const RootStack = createStackNavigator();

const RouteApp = ({navigation}) => {
  const [authenticated, setAuthenticated] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('userData')
      .then((res) => {
        let userInfo = JSON.parse(res);
        setAuthenticated(userInfo);
        setLoading(true);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, []);

  if (!isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {authenticated ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={DrawerScreen} />
          <Stack.Screen name="Splash" component={RootStackScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={RootStackScreen} />
          <Stack.Screen name="Home" component={DrawerScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RouteApp;
