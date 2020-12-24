import React, {Component, useState, useEffect} from 'react';

import {
  NavigationContainer,
  StackActions,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

import {ActivityIndicator, Image, Text, TouchableOpacity, View} from 'react-native';
import CustomSidebarMenu from './CustomSidebarMenu';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import CartDetailScreen from '../screens/CartDetailScreen';

import SignInScreen from '../screens/SignInScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-ionicons';
import RootStackScreen from '../screens/RootStackScreen';


// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
// const [isDarkTheme, setIsDarkTheme] = useState(false);
// const TabStack = ({navigation}) => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home';
//           } else if (route.name === 'Cart') {
//             iconName = focused ? 'cart' : 'cart';
//           }
//           return (
//             <Icon ios={iconName} android={iconName} size={size} color={color} />
//           );
//         },
//       })}
//       tabBarOptions={{
//         iconStyle: {top: 10},

//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//         style: {
//           backgroundColor: '#222222',
//         },
//         labelStyle: {
//           textAlign: 'center',
//           fontSize: 17,
//           fontWeight: 'bold',
//           top: 10,
//           borderBottomColor: 'tomato',
//           borderRadius: 20,
//         },
//       }}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Cart" component={CartStack} />
//     </Tab.Navigator>
//   );
// };
// function CartStack({navigation}) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Cart"
//         options={{
//           headerTitle: 'WishList',
//           headerTintColor: 'royalblue',
//           headerBackTitleVisible: false,
//           headerTitleStyle: {
//             fontSize: 24,
//             color: '#000',
//             textAlign: 'left',
//           },
//           headerStyle: {
//             backgroundColor: 'orange',
//           },
//           headerLeft: ({naviagation}) => (
//             <TouchableOpacity onPress={() => navigation.openDrawer()}>
//               <Image
//                 style={{marginLeft: 15}}
//                 source={require('../assets/image/ic_list-text.png')}
//               />
//             </TouchableOpacity>
//           ),
//         }}
//         component={CartDetailScreen}
//       />
//     </Stack.Navigator>
//   );
// }
// function Login({navigation}) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="login"
//         options={{headerShown: false}}
//         component={SignInScreen}
//       />
//     </Stack.Navigator>
//   );
// }

// function Home({navigation}) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="homescreen"
//         options={{
//           headerTitle: 'Welcome',
//           headerTintColor: 'royalblue',
//           headerBackTitleVisible: false,
//           headerTitleStyle: {
//             fontSize: 24,
//             color: '#000',
//             textAlign: 'left',
//           },
//           headerStyle: {
//             backgroundColor: '#4682B4',
//           },
//           headerLeft: ({naviagation}) => (
//             <TouchableOpacity onPress={() => navigation.openDrawer()}>
//               <Image
//                 style={{marginLeft: 15}}
//                 source={require('../assets/image/ic_list-text.png')}
//               />
//             </TouchableOpacity>
//           ),
//         }}
//         component={HomeScreen}
//       />
//       <Stack.Screen
//         name="FoodDetail"
//         options={{
//           headerTintColor: 'white',
//           headerBackTitleVisible: false,
//           headerTitleStyle: {
//             fontSize: 18,
//             color: '#FFFFFF',
//           },
//           headerStyle: {
//             backgroundColor: '#d9534f',
//           },
//         }}
//         component={FoodDetailScreen}
//       />
//       <Stack.Screen
//         name="Cart"
//         options={{
//           headerTintColor: 'white',
//           headerBackTitleVisible: false,
//           headerTitleStyle: {
//             fontSize: 18,
//             color: '#FFFFFF',
//           },
//           headerStyle: {
//             backgroundColor: '#d9534f',
//           },
//         }}
//         component={CartDetailScreen}
//       />
//     </Stack.Navigator>
//   );
// }
// function DrawerHome({navigation}) {
//   return (
//     <Drawer.Navigator
//       drawerType="slide"
//       screenOptions={{headerShown: false}}
//       drawerContent={(props) => <CustomSidebarMenu {...props} />}>
//       <Drawer.Screen name="Home" component={TabStack} />
//     </Drawer.Navigator>
//   );
// }

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
        // <Stack.Navigator screenOptions={{headerShown: false}}>
        //   <Stack.Screen name="Home" component={DrawerHome} />
        //   <Stack.Screen name="Login" component={Login} />
        // </Stack.Navigator>
        // <Drawer.Navigator
        //   drawerType="slide"
        //   screenOptions={{headerShown: false}}
        //   drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        //   <Drawer.Screen name="Home" component={MainTabScreen} />
        // </Drawer.Navigator>
        <View><Text>Page Not Be Found #Error 404</Text></View>
      ) : (

        // <Stack.Navigator screenOptions={{headerShown: false}}>
        //   <Stack.Screen name="Login" component={Login} />
        //   <Stack.Screen name="Home" component={DrawerHome} />
        // </Stack.Navigator>
        <RootStackScreen />
      )}
    </NavigationContainer>
  );
};

export default RouteApp;
