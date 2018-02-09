import {select, call, put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {SET_CART_ITEMS, INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY, FETCHING, FETCHED} from '../constants/actionTypes';
import {setShippingCost, setShippingCostFetchStatus} from '../actions';
import {cartItemsSelector} from '../selectors';


function* fetchShippingCost() {
  yield put(setShippingCostFetchStatus(FETCHING));
  const items = yield select(cartItemsSelector);
  const idsRequestString = items.reduce((str, item) => str += (item.id + ',').repeat(item.quantity), '').replace(/,\s*$/, '');
  const response = yield call(fetch, `http://localhost:8081/shipping/${idsRequestString}`);
  const data = yield response.json();
  yield put(setShippingCost(data.total));
  yield put(setShippingCostFetchStatus(FETCHED));
}

export function* shippingCostSaga() {
  yield takeLatest([SET_CART_ITEMS, INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY], fetchShippingCost);
}