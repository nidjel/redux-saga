import { call, put, take } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {SET_CURRENT_USER_INFO} from '../constants/actionTypes';
import {setCartItems} from '../actions';

export function* cartSaga() {
  const {data: {id}} = yield take(SET_CURRENT_USER_INFO);
  const response = yield call(fetch, `http://localhost:8081/cart/${id}`);
  const data = yield response.json();
  yield put(setCartItems(data.items));
}