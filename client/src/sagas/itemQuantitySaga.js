import {call, put, takeLatest, select} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import fetch from 'isomorphic-fetch';
import {INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY, FETCHING, FETCHED, ITEM_QUANTITY_CHANGED} from '../constants/actionTypes';
import {decreaseItemQuantity} from '../actions';
import {currentUserSelector} from '../selectors';
import {setItemQuantityFetchStatus} from '../actions';
import socket from '../createSocketConnection';

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
  socket.emit(ITEM_QUANTITY_CHANGED, socket.id, currentUser.id);
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
  socket.emit(ITEM_QUANTITY_CHANGED, socket.id, currentUser.id);
  yield put(setItemQuantityFetchStatus(FETCHED));
}

export function* itemQuantitySaga() {
  const channel = eventChannel(emit => {
    const emitData = (socketId) => emit(socketId);
    socket.on(ITEM_QUANTITY_CHANGED, emitData);
    return () => {
      socket.off(ITEM_QUANTITY_CHANGED, emitData);
    };
  });
  yield [
    takeLatest(INCREASE_ITEM_QUANTITY, handleIncreaseItemQuantity),
    takeLatest(DECREASE_ITEM_QUANTITY, handleDecreaseItemQuantity),
    takeLatest(channel, function* (socketIdFromServer) {
      if (socket.id !== socketIdFromServer) yield put({type: ITEM_QUANTITY_CHANGED});
    })
  ]
}