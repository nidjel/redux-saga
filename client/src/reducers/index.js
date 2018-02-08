import {combineReducers} from 'redux';
import isCheckingOut from './isCheckingOut';
import currentUser from './currentUser';

export default combineReducers({
  isCheckingOut,
  currentUser
});