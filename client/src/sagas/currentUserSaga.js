import { call, put, take } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {GET_CURRENT_USER_INFO} from '../constants/actionTypes';
import {setCurrentUserInfo} from '../actions';

export function* currentUserSaga() {
  const {id} = yield take(GET_CURRENT_USER_INFO);
  const response = yield call(fetch, `http://localhost:8081/user/${id}`);
  const data = yield response.json();
  yield put(setCurrentUserInfo(data));
}