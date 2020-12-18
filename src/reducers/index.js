import {combineReducers} from 'redux';
import BannerReducer from './BannerReducer';
import cartItemsReducer from './cartItemsReducer';

export default combineReducers({
  BannerReducer: BannerReducer,
  cartItemsReducer: cartItemsReducer,
});
