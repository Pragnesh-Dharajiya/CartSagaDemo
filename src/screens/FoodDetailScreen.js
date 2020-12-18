import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import Icon from 'react-native-ionicons';
import {connect, useDispatch, useSelector} from 'react-redux';
import * as CartActions from '../actions/CartActions';
import CartIcon from '../global/CartIcon';
var {height, width} = Dimensions.get('window');
import * as CONST from '../utils/Constants';

const FoodDetailScreen = (props) => {
  props.navigation.setOptions({
    headerRight: () => CartIcon({props, cartItems}),
  });
  const cartItems = useSelector((state) => state);

  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch({type: CONST.ADD_TO_CART, payload: item});
  };

  function _renderItemFood(item) {
    let catg = props.route.params.foodId;
    if (catg == item.categorie) {
      return (
        <TouchableOpacity
          style={[{backgroundColor: 'white', height: 300}, styles.divFood]}>
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{uri: item.image}}
          />
          <View
            style={{
              height: width / 2 - 20 - 90,
              backgroundColor: 'transparent',
              width: width / 2 - 20 - 10,
            }}
          />
          <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}}>
            {item.name}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              position: 'absolute',
              bottom: 90,
            }}>
            Descp Food and Details
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'tomato',
              textAlign: 'center',
              position: 'absolute',
              bottom: 55,
            }}>
            Price: ${item.price}
          </Text>
          <TouchableOpacity
            onPress={() => addItemToCart(item)}
            style={{
              width: width / 2 - 40,
              backgroundColor: '#33c37d',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              padding: 4,
              position: 'absolute',
              bottom: 10,
            }}>
            <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
              Add Cart
            </Text>
            <View style={{width: 10}} />
            <Icon name="ios-add-circle" size={30} color={'white'} />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <Text
        style={{
          fontSize: 30,
          alignSelf: 'center',
          fontWeight: 'bold',
          padding: 10,
        }}>
        {props.route.params.foodName}
      </Text>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
          <FlatList
            data={props.route.params.food}
            numColumns={2}
            renderItem={({item}) => _renderItemFood(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  imageFood: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -45,
  },
  divFood: {
    width: width / 2 - 20,
    padding: 20,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
});

export default FoodDetailScreen;
