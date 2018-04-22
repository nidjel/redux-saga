import { call, put, take, select, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {GET_CURRENT_USER_INFO} from '../constants/actionTypes';
import {setCurrentUserInfo} from '../actions';
import socket from '../createSocketConnection';
import { currentUserSelector } from '../selectors/currentUserSelector';


export function* currentUserSaga() {
  const {id} = yield take(GET_CURRENT_USER_INFO);
  const response = yield call(fetch, `http://localhost:8081/user/${id}`);
  const data = yield apply(response, response.json);
  yield put(setCurrentUserInfo(data));
  const currentUser = yield select(currentUserSelector);
  socket.emit('userId', currentUser.id);
}