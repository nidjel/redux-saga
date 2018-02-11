import initialState from "./initialState";
import {SET_CHECKOUT_PHASE} from '../constants/actionTypes';

export default function checkOutPhase(state=initialState.checkOutPhase, {type, phase}) {
  if (type === SET_CHECKOUT_PHASE) {
    return phase;
  }
  return state;
}