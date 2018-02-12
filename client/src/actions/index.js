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
  return {type: types.SET_TAX_RATE, data};
}

export function increaseItemQuantity(id) {
  return {type: types.INCREASE_ITEM_QUANTITY, id};
}

export function decreaseItemQuantity(id, local=false) {
  return {type: types.DECREASE_ITEM_QUANTITY, id, local};
}

export function setShippingCostFetchStatus(status) {
  return {type: types.SET_SHIPPING_COST_FETCH_STATUS, status};
}

export function setItemQuantityFetchStatus(status) {
  return {type: types.SET_ITEM_QUANTITY_FETCH_STATUS, status};
}

export function setCustomerServiceAvailability(availability) {
  return {type: types.SET_CUSTOMER_SERVICE_AVAILABILITY, availability};
}

export function setCanCheckOut(value) {
  return {type: types.SET_CAN_CHECKOUT, value};
}

export function setCheckOutPhase(phase) {
  return {type: types.SET_CHECKOUT_PHASE, phase};
}