import initialState from './initialState';
import {SET_SHIPPING_COST_FETCH_STATUS} from '../constants/actionTypes';

export default function shippingCostFetchStatus(state=initialState.shippingCostFetchStatus, {type, status}) {
  if (type === SET_SHIPPING_COST_FETCH_STATUS) {
    return status;
  }
  return state;
}