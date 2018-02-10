import {SET_CUSTOMER_SERVICE_AVAILABILITY} from '../constants/actionTypes';
import initialState from './initialState';

export default function customerServiceAvailability(state=initialState.customerServiceAvailability, {type, availability}) {
  if (type === SET_CUSTOMER_SERVICE_AVAILABILITY) {
    return availability;
  }
  return state;
}