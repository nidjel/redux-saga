import initialState from './initialState';
import {SET_ITEM_QUANTITY_FETCH_STATUS} from '../constants/actionTypes';

export default function itemQuantityFetchStatus(state=initialState.itemQuantityFetchStatus, {type, status}) {
  if (type === SET_ITEM_QUANTITY_FETCH_STATUS) {
    return status;
  }
  return state;
}