import * as types from '../constants/actionTypes';

export function toggleCheckingOut(value) {
  return {type: types.TOGGLE_CHECKING_OUT, value};
}

export function getCurrentUserInfo(userId) {
  return {type: types.GET_CURRENT_USER_INFO, id: userId};
}

export function setCurrentUserInfo(data) {
  return {type: types.SET_CURRENT_USER_INFO, data};
}