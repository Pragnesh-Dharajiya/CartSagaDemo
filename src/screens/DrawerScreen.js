import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import SignInScreen from './SignInScreen';

import Splash from './Spalsh';
import MainTabScreen from './MainTabScreen';
import CustomSidebarMenu from '../navigation/CustomSidebarMenu';

const Drawer = createDrawerNavigator();

const DrawerScreen = ({navigation}) => (
  <Drawer.Navigator
    drawerType="slide"
    screenOptions={{headerShown: false}}
    drawerContent={(props) => <CustomSidebarMenu {...props} />}>
    <Drawer.Screen name="Home" component={MainTabScreen} />
  </Drawer.Navigator>
);

export default DrawerScreen;
