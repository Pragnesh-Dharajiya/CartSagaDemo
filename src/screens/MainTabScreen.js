import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CartDetailScreen from './CartDetailScreen';
import FoodDetailScreen from './FoodDetailScreen';
import FastFoodScreen from './FastFoodScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Image, Text} from 'react-native';
import {useSelector} from 'react-redux';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Homes"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: 'red',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({props, navigation}) => {
  const {colors} = useTheme();
  const cartItems = useSelector((state) => state);
  console.log('carts', cartItems);
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'FoodFinder',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style={{
                  justifyContent: 'center',
                  marginRight: wp('3%'),
                  height: 5,
                  paddingTop: 20,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    height: 20,
                    width: 20,
                    borderRadius: 15,
                    backgroundColor: 'rgba(95,197,123,0.8)',
                    left: 20,
                    bottom: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    {cartItems.cartItemsReducer.quantity}
                  </Text>
                </View>
                <Image source={require('../assets/image/ic_carts.png')} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{paddingHorizontal: 5, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://api.adorable.io/avatars/80/abott@adorable.png',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="FastFood"
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
        component={FastFoodScreen}
      />
      <HomeStack.Screen
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
      <HomeStack.Screen
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
      {/* <HomeStack.Screen
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="CardItemDetails"
        component={CardItemDetails}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      /> */}
    </HomeStack.Navigator>
  );
};

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationStack.Screen
      name="Notifications"
      component={CartDetailScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </NotificationStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={CartDetailScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={CartDetailScreen}
      />
    </ProfileStack.Navigator>
  );
};
