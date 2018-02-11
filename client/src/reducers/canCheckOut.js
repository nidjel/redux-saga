import initialState from "./initialState";
import {SET_CAN_CHECKOUT} from '../constants/actionTypes';

export default function canCheckOut(state=initialState.canCheckOut, {type, value}) {
  if (type === SET_CAN_CHECKOUT) {
    return value;
  }
  return state;
}