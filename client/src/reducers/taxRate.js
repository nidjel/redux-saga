import initialState from './initialState';
import {SET_TAX_RATE} from '../constants/actionTypes';

export default function taxRate(state=initialState.taxRate, {type, data}) {
  if (type === SET_TAX_RATE) {
    return data;
  }
  return state;
}