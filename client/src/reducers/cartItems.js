import initialState from './initialState';
import {SET_CART_ITEMS} from '../constants/actionTypes';

export default function cartItems(state=initialState.cartItems, {type, data}) {
  if (type === SET_CART_ITEMS) {
    return [...data];
  }
  return state;
}