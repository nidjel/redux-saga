import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function runSagas(sagaMiddleware, sagas) {
  Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));
}

export default function(reducer, initialState={}) {
  let store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
  runSagas(sagaMiddleware, sagas);
  return store;
}