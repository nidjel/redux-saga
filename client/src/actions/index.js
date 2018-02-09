import * as types from '../constants/actionTypes';

export function toggleCheckingOut(value) {
  return {type: types.TOGGLE_CHECKING_OUT, value};
}

export function getCurrentUserInfo(userId) {
  return {type: types.GET_CURRENT_USER_INFO, id: userId};
}

export function setCurrentUserInfo(data) {
  return {type: types.SET_CURRENT_USER_INFO, data};
}

export function setCartItems(data) {
  return {type: types.SET_CART_ITEMS, data};
}

export function setItemDetails(data) {
  return {type: types.SET_ITEM_DETAILS, data};
}

export function setShippingCost(data) {
  return {type: types.SET_SHIPPING_COST, data};
}

export function setTaxRate(data) {
  return {type: types.SET_TAX_RATE, data}
}