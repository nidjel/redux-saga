import initialState from './initialState';
import {SET_SHIPPING_COST} from '../constants/actionTypes';

export default function shippingCost(state=initialState.shippingCost, {type, data}) {
  if (type === SET_SHIPPING_COST) {
    return data;
  }
  return state;
}