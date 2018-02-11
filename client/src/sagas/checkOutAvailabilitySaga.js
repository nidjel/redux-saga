import {takeLatest, select, put} from 'redux-saga/effects';
import {SET_SHIPPING_COST_FETCH_STATUS, FETCHED} from '../constants/actionTypes';
import {setCanCheckOut} from '../actions';

export function* checkOutAvailabilitySaga() {
  yield takeLatest(SET_SHIPPING_COST_FETCH_STATUS, function*({status}) {
      yield put(setCanCheckOut(status === FETCHED));
    }
  );
}