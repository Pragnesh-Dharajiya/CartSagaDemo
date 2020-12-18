import * as CONST from '../utils/Constants';

const initialState = [];

const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONST.ADD_TO_CART:
      let cart = action.payload;
      if (state.length) {
        let index = state.findIndex((obj) => obj.name === cart.name);

        if (index !== -1) {
          initialState.splice(index, 1);
        } else {
          initialState.push(cart);
        }
      } else {
        initialState.push(cart);
      }
      return {
        ...state,
        likeImage: initialState,
      };

    // return arr.findIndex((obj) => obj.email === email);
    // return [...state, action.payload];

    case CONST.REMOVE_FROM_CART:
      return state.filter((cartItem) => cartItem.name !== action.payload.name);
  }
  return state;
};

export default cartItemsReducer;
