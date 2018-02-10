import {combineReducers} from 'redux';
import isCheckingOut from './isCheckingOut';
import currentUser from './currentUser';
import cartItems from './cartItems';
import items from './items';
import shippingCost from './shippingCost';
import taxRate from './taxRate';
import shippingCostFetchStatus from './shippingCostFetchStatus';
import itemQuantityFetchStatus from './itemQuantityFetchStatus';
import itemQuantityErrorMessages from './itemQuantityErrorMessages';

export default combineReducers({
  isCheckingOut,
  currentUser,
  cartItems,
  items,
  shippingCost,
  taxRate,
  shippingCostFetchStatus,
  itemQuantityFetchStatus,
  itemQuantityErrorMessages
});