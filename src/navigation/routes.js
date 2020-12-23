import React, {Component, useState, useEffect} from 'react';

import {NavigationContainer, StackActions} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

import {Image, TouchableOpacity} from 'react-native';
import CustomSidebarMenu from './CustomSidebarMenu';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import CartDetailScreen from '../screens/CartDetailScreen';

import SignInScreen from '../screens/SignInScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// const TabStack = ({navigation}) => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'contact' : 'contact';
//           }
//           // return (
//           //   // <Icon ios={iconName} android={iconName} size={size} color={color} />
//           // );
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
//       {/* <Tab.Screen name="Profile" component={ProfileStack} /> */}
//     </Tab.Navigator>
//   );
// };
// function ProfileStack({navigation}) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="profilescreen"
//         options={{
//           headerTitle: 'Profile',
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
//                 source={require('../src/assets/image/ic_list-text.png')}
//               />
//             </TouchableOpacity>
//           ),
//         }}
//         component={ProfileScreen}
//       />
//     </Stack.Navigator>
//   );
// }
function Login({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        options={{headerShown: false}}
        component={SignInScreen}
      />
    </Stack.Navigator>
  );
}

function Home({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homescreen"
        options={{
          headerTitle: 'Welcome',
          headerTintColor: 'royalblue',
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: 24,
            color: '#000',
            textAlign: 'left',
          },
          headerStyle: {
            backgroundColor: '#4682B4',
          },
          headerLeft: ({naviagation}) => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{marginLeft: 15}}
                source={require('../assets/image/ic_list-text.png')}
              />
            </TouchableOpacity>
          ),
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="FoodDetail"
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: 18,
            color: '#FFFFFF',
          },
          headerStyle: {
            backgroundColor: '#d9534f',
          },
        }}
        component={FoodDetailScreen}
      />
      <Stack.Screen
        name="Cart"
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: 18,
            color: '#FFFFFF',
          },
          headerStyle: {
            backgroundColor: '#d9534f',
          },
        }}
        component={CartDetailScreen}
      />
    </Stack.Navigator>
  );
}
function DrawerHome({navigation}) {
  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{headerShown: false}}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

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
    return null;
  }

  return (
    <NavigationContainer>
      {authenticated ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={DrawerHome} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={DrawerHome} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RouteApp;
