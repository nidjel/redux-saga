import { call, put, take, fork } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {SET_CART_ITEMS} from '../constants/actionTypes';
import {setItemDetails} from '../actions';

function* fetchItemDetails(id) {
  const response = yield call(fetch, `http://localhost:8081/items/${id}`);
  const data = yield response.json();
  const info = data[0];
  yield put(setItemDetails(info));
}

export function* itemDetailSaga() {
  const {data} = yield take(SET_CART_ITEMS);
  yield data.map(item => fork(fetchItemDetails, item.id));
}