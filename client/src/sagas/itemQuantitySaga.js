import {call, put, takeLatest, select} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY, FETCHING, FETCHED} from '../constants/actionTypes';
import {decreaseItemQuantity} from '../actions';
import {currentUserSelector} from '../selectors';
import {setItemQuantityFetchStatus} from '../actions';

function* handleDecreaseItemQuantity({id, local}) {
  if (local) {
    return;
  }
  yield put(setItemQuantityFetchStatus(FETCHING));
  const currentUser = yield select(currentUserSelector);
  const response = yield call(fetch, `http://localhost:8081/cart/remove/${currentUser.id}/${id}`);
  if (response.status !== 200) {
    console.warn('received non-200 status: ', response);
  }
  yield put(setItemQuantityFetchStatus(FETCHED));
}

function* handleIncreaseItemQuantity({id}) {
  yield put(setItemQuantityFetchStatus(FETCHING));
  const currentUser = yield select(currentUserSelector);
  const response = yield call(fetch, `http://localhost:8081/cart/add/${currentUser.id}/${id}`);
  if (response.status !== 200) {
    const data = yield response.json();
    alert(data.error);
    yield put(decreaseItemQuantity(id, true));
  }
  yield put(setItemQuantityFetchStatus(FETCHED));
}

export function* itemQuantitySaga() {
  yield [
    takeLatest(INCREASE_ITEM_QUANTITY, handleIncreaseItemQuantity),
    takeLatest(DECREASE_ITEM_QUANTITY, handleDecreaseItemQuantity)
  ]
}