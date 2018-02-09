import initialState from './initialState';
import {SET_ITEM_DETAILS} from '../constants/actionTypes';

export default function items(state=initialState.items, {type, data}) {
  if (type === SET_ITEM_DETAILS) {
    return [...state, data]
  }
  return state;
}