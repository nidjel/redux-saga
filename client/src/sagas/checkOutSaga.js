import {take, call, put, select} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {currentUserSelector} from '../selectors';
import {
  TOGGLE_CHECKING_OUT, 
  QUANTITY_VERIFICATION_CHECKOUT_PHASE, 
  ERROR_CHECKOUT_PHASE, 
  CREDIT_VALIDATION_CHECKOUT_PHASE, 
  PURCHASE_FINALIZATION_CHECKOUT_PHASE, 
  SUCCESS_CHECKOUT_PHASE
} from '../constants/actionTypes';
import {setCheckOutPhase} from '../actions';

function* validateCart(user) {
  const response = yield call(fetch, `http://localhost:8081/cart/validate/${user.id}`);
  const {validated} = yield response.json();
  return validated;
}

function* validateCreditCart(user) {
  const response = yield call(fetch, `http://localhost:8081/card/validate/${user.id}`);
  const {validated} = yield response.json();
  return validated;
}

function* executePurchase(user) {
  const response = yield call(fetch, `http://localhost:8081/cart/charge/${user.id}`);
  const {success} = yield response.json();
  return success;
}

function* checkout() {
  const user = yield select(currentUserSelector);
  yield put(setCheckOutPhase(QUANTITY_VERIFICATION_CHECKOUT_PHASE));
  const cartValidated = yield call(validateCart, user);
  if (!cartValidated) {
    yield put(setCheckOutPhase(ERROR_CHECKOUT_PHASE));
    return;
  }
  yield put(setCheckOutPhase(CREDIT_VALIDATION_CHECKOUT_PHASE));
  const creditCardValidated = yield call(validateCreditCart, user);
  if (!creditCardValidated) {
    yield put(setCheckOutPhase(ERROR_CHECKOUT_PHASE));
    return;
  }

  yield put(setCheckOutPhase(PURCHASE_FINALIZATION_CHECKOUT_PHASE));
  const purchaseSuccessful = yield call(executePurchase, user);
  if (!purchaseSuccessful) {
    yield put(setCheckOutPhase(ERROR_CHECKOUT_PHASE));
    return;
  }
  yield put(setCheckOutPhase(SUCCESS_CHECKOUT_PHASE));
}

export function* checkOutSaga() {
  while (true) {
    const isCheckingOut = yield take(TOGGLE_CHECKING_OUT);
    if (isCheckingOut) {
      yield call(checkout);
    }
  }
}