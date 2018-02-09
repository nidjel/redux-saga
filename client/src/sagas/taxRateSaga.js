import { call, put, take } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {SET_CURRENT_USER_INFO} from '../constants/actionTypes';
import {setTaxRate} from '../actions';

export function* taxRateSaga() {
  const {data: {country}} = yield take(SET_CURRENT_USER_INFO);
  const response = yield call(fetch, `http://localhost:8081/tax/${country}`);
  const data = yield response.json();
  yield put(setTaxRate(data.rate));
}