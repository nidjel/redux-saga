import { call, put, takeLatest, select } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {SET_CURRENT_USER_INFO, ITEM_QUANTITY_CHANGED} from '../constants/actionTypes';
import {setCartItems} from '../actions';
import { currentUserSelector } from '../selectors/currentUserSelector';

function* getCartItems() {
  const user = yield select(currentUserSelector);
  const response = yield call(fetch, `http://localhost:8081/cart/${user.id}`);
  const data = yield response.json();
  yield put(setCartItems(data.items));
}

export function* cartSaga() {
  yield takeLatest([SET_CURRENT_USER_INFO, ITEM_QUANTITY_CHANGED], getCartItems);
}