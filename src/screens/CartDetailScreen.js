import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-ionicons';
import {useDispatch, useSelector} from 'react-redux';
var {height, width} = Dimensions.get('window');
import * as CONST from '../utils/Constants';

const CartDetailScreen = (props) => {
  const cart = useSelector((state) => state.cartItemsReducer.cartItems);
  const dispatch = useDispatch();

  const removeItemFromCart = (item, index) =>
    dispatch({
      type: CONST.REMOVE_FROM_CART,
      payload: {item, index},
    });

  const incrementQuantity = (item) => {
    dispatch({type: CONST.INC_ITEM, payload: item});
  };
  const decrementQuantity = (item) => {
    dispatch({type: CONST.DEC_ITEM, payload: item});
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          color: 'gray',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        Cart Food
      </Text>
      {cart.length !== 0 ? (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.categorie}
          renderItem={({item, index}) => (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{height: 20}} />

              <View style={{height: 10}} />

              <View style={{flex: 1}}>
                <View
                  style={{
                    width: width - 20,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    borderColor: '#cccccc',
                    paddingBottom: 10,
                  }}>
                  <Image
                    resizeMode={'contain'}
                    style={{width: width / 3, height: width / 3}}
                    source={{uri: item.image}}
                  />
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      padding: 10,
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        Name: {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        top: 10,
                        zIndex: 999,
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#48b4e0',
                          fontSize: 20,
                        }}>
                        Price: ${item.price}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity
                          onPress={() => decrementQuantity(item)}>
                          <Icon
                            name="ios-remove-circle"
                            size={30}
                            color={'#48b4e0'}
                          />
                        </TouchableOpacity>
                        <Text
                          style={{paddingHorizontal: 8, fontWeight: 'bold'}}>
                          {item.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => incrementQuantity(item)}>
                          <Icon
                            name="ios-add-circle"
                            size={30}
                            color={'#48b4e0'}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#48b4e0',
                        fontSize: 20,
                        top: 15,
                      }}>
                      Total Price: ${item.total}
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        paddingBottom: 15,
                      }}>
                      <TouchableOpacity
                        onPress={() => Alert.alert('Buy Success')}
                        style={{
                          alignSelf: 'center',
                          backgroundColor: 'tomato',
                          width: 120,
                          alignItems: 'center',
                          padding: 5,
                          borderRadius: 45,
                          left: -10,
                          top: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          Buy
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => removeItemFromCart(item, index)}
                        style={{
                          alignSelf: 'center',
                          backgroundColor: 'tomato',
                          width: 130,
                          alignItems: 'center',
                          padding: 5,
                          borderRadius: 45,
                          top: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          Remove
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your cart is empty</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '400',
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: '200',
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#ff333390',
    padding: 5,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartMessage: {
    fontSize: 28,
  },
});

export default CartDetailScreen;
