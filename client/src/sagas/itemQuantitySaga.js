import {call, put, takeLatest, select} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import fetch from 'isomorphic-fetch';
import {INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY, FETCHING, FETCHED} from '../constants/actionTypes';
import {decreaseItemQuantity} from '../actions';
<<<<<<< HEAD
import {currentUserSelector, clientIdSelector} from '../selectors';
import {setItemQuantityFetchStatus} from '../actions';

const socket = window.io();
=======
import {currentUserSelector} from '../selectors';
import {setItemQuantityFetchStatus} from '../actions';
>>>>>>> a1eec9ce82c9d1ddade56caf8ef0544c892f1288

function* handleDecreaseItemQuantity({id, local}) {
  if (local) {
    return;
  }
  yield put(setItemQuantityFetchStatus(FETCHING));
  const currentUser = yield select(currentUserSelector);
  const clientId = yield select(clientIdSelector);
  const response = yield call(fetch, `http://localhost:8081/cart/remove/${currentUser.id}/${id}`);
  if (response.status !== 200) {
    console.warn('received non-200 status: ', response);
  }
  socket.emit('ITEM_QUANTITY_CHANGED', clientId);
  yield put(setItemQuantityFetchStatus(FETCHED));
}

function* handleIncreaseItemQuantity({id}) {
  yield put(setItemQuantityFetchStatus(FETCHING));
  const currentUser = yield select(currentUserSelector);
  const clientId = yield select(clientIdSelector);
  const response = yield call(fetch, `http://localhost:8081/cart/add/${currentUser.id}/${id}`);
  if (response.status !== 200) {
    const data = yield response.json();
    alert(data.error);
    yield put(decreaseItemQuantity(id, true));
  }
  socket.emit('ITEM_QUANTITY_CHANGED', clientId);
  yield put(setItemQuantityFetchStatus(FETCHED));
}

export function* itemQuantitySaga() {
  const channel = eventChannel(emit => {
    socket.on('ITEM_QUANTITY_CHANGED', (fromClientId) => emit(fromClientId));
    return () => {};
  });
  yield [
    takeLatest(INCREASE_ITEM_QUANTITY, handleIncreaseItemQuantity),
    takeLatest(DECREASE_ITEM_QUANTITY, handleDecreaseItemQuantity),
    takeLatest(channel, function* (fromClientId) {
      const clientId = yield select(clientIdSelector);
      if (clientId !== fromClientId) yield put({type: 'ITEM_QUANTITY_CHANGED'});
    })
  ]
}