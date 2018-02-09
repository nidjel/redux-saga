import { call, put, take } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {SET_CART_ITEMS} from '../constants/actionTypes';
import {setShippingCost} from '../actions';

export function* shippingCostSaga() {
  const {data: items} = yield take(SET_CART_ITEMS);
  const idsRequestString = items.reduce((str, item) => str += (item.id + ',').repeat(item.quantity), '').replace(/,\s*$/, '');
  const response = yield call(fetch, `http://localhost:8081/shipping/${idsRequestString}`);
  const data = yield response.json();
  yield put(setShippingCost(data.total));
}