import { call, put, take, fork } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY} from '../constants/actionTypes';
import {setItemDetails} from '../actions';

export function* itemQuantitySaga() {
  yield takeLatest([INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY], fetchAddItem)
}