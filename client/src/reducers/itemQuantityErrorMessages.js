import initialState from './initialState';
import {SET_ITEM_QUANTITY_ERROR_MESSAGE} from '../constants/actionTypes';

export default function itemQuantityErrorMessages(state=initialState.itemQuantityErrorMessages, {type, id, message}) {
  if (type === SET_ITEM_QUANTITY_ERROR_MESSAGE) {
    return {...state, [id]: message};
  }
  return state;
}