import _ from 'lodash';
import {Alert} from 'react-native';

import * as CONST from '../utils/Constants';

const initialState = {
  cartItems: [],
  total: 0,
};

const cartItemsReducer = (state = initialState, action) => {
  let cartItems = [...state.cartItems];

  switch (action.type) {
    case CONST.ADD_TO_CART:
      let itemIndex = _.findIndex(cartItems, (item) => {
        return item.name.toLowerCase() === action.payload.name.toLowerCase();
      });

      if (itemIndex > -1) {
        cartItems[itemIndex].quantity += 1;
        cartItems[itemIndex].total =
          cartItems[itemIndex].price * cartItems[itemIndex].quantity;
      } else {
        action.payload.quantity = 1;
        action.payload.total = action.payload.price;
        cartItems.push(action.payload);
      }

      return {
        ...state,
        cartItems,
        total: _.sumBy(cartItems, 'total'),
        quantity: _.sumBy(cartItems, 'quantity'),
      };

    case CONST.REMOVE_FROM_CART:
      cartItems.splice(action.payload.index, 1);

      return {
        ...state,
        cartItems,
        total: _.sumBy(cartItems, 'total'),
        quantity: _.sumBy(cartItems, 'quantity'),
      };

    case CONST.INC_ITEM:
      let inc = _.findIndex(cartItems, (item) => {
        return item.name.toLowerCase() === action.payload.name.toLowerCase();
      });

      if (inc > -1) {
        cartItems[inc].quantity += 1;
        cartItems[inc].total = cartItems[inc].price * cartItems[inc].quantity;
      } else {
        action.payload.quantity = 1;
        action.payload.total = action.payload.price;
        cartItems.push(action.payload);
      }

      return {
        ...state,
        cartItems,
        total: _.sumBy(cartItems, 'total'),
        quantity: _.sumBy(cartItems, 'quantity'),
      };

    case CONST.DEC_ITEM:
      let dec = _.findIndex(cartItems, (item) => {
        return item.name.toLowerCase() === action.payload.name.toLowerCase();
      });

      if (dec > -1) {
        if (cartItems[dec].quantity > 1) {
          cartItems[dec].quantity -= 1;
          cartItems[dec].total = cartItems[dec].price * cartItems[dec].quantity;
        } else {
          Alert.alert('Empty Cart');
        }
      } else {
        action.payload.quantity = 1;
        action.payload.total = action.payload.price;
        cartItems.push(action.payload);
      }

      return {
        ...state,
        cartItems,
        total: _.sumBy(cartItems, 'total'),
        quantity: _.sumBy(cartItems, 'quantity'),
      };
  }

  return state;
};

export default cartItemsReducer;
