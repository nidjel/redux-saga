import initialState from './initialState';
import {SET_CURRENT_USER_INFO} from '../constants/actionTypes';

export default function currentUser(state=initialState.currentUser, {type, data}) {
  if (type === SET_CURRENT_USER_INFO) {
    return {
      ...state,
      ...data
    }
  }
  return state;
}