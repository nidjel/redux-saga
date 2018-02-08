import initialState from './initialState';
import {TOGGLE_CHECKING_OUT} from '../constants/actionTypes';

export default function isCheckingOut(state=initialState.isCheckingOut, {type, value}) {
  if (type === TOGGLE_CHECKING_OUT) {
    return value;
  }
  return state;
}