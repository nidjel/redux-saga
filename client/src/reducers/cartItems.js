import initialState from './initialState';
import {SET_CART_ITEMS, INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY} from '../constants/actionTypes';

export default function cartItems(state=initialState.cartItems, {type, data, id}) {
  if (type === SET_CART_ITEMS) {
    return [...data];
  }
  if (type === INCREASE_ITEM_QUANTITY) {
    const item = state.find(item => item.id === id);
    const itemIndex = state.findIndex(item => item.id === id);
    const newItem = {...item, quantity: item.quantity + 1};
    return [...state.slice(0, itemIndex), newItem, ...state.slice(itemIndex + 1)];
  }
  if (type === DECREASE_ITEM_QUANTITY) {
    const item = state.find(item => item.id === id);
    const itemIndex = state.findIndex(item => item.id === id);
    const newItem = {...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0};
    return [...state.slice(0, itemIndex), newItem, ...state.slice(itemIndex + 1)];
  }
  return state;
}