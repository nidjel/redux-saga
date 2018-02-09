import {combineReducers} from 'redux';
import isCheckingOut from './isCheckingOut';
import currentUser from './currentUser';
import cartItems from './cartItems';
import items from './items';

export default combineReducers({
  isCheckingOut,
  currentUser,
  cartItems,
  items
});