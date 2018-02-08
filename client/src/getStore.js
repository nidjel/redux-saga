import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {currentUserSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function(reducer, initialState={}) {
  let store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(currentUserSaga);
  return store;
}

