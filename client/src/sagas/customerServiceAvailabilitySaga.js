import { call, put, take } from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import {setCustomerServiceAvailability} from '../actions';

export function* customerServiceAvailabilitySaga() {
  const socket = window.io();
  const channel = eventChannel(emit => {
    const enableSupportMessage = ()=>{
      emit(true)
    };

    const disableSupportMessage = ()=>{
        emit(false)
    };

    socket.on('SUPPORT_AVAILABLE', enableSupportMessage);
    socket.on('SUPPORT_NOT_AVAILABLE', disableSupportMessage);

    return () => {
      socket.off('SUPPORT_AVAILABLE', enableSupportMessage);
      socket.off('SUPPORT_NOT_AVAILABLE', disableSupportMessage);
    }
  });
  while (true) {
    let supportAvailable = yield take(channel);
    yield put(setCustomerServiceAvailability(supportAvailable));
  }
}