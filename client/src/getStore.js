import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {currentUserSaga, cartSaga, itemDetailSaga, shippingCostSaga, taxRateSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function(reducer, initialState={}) {
  let store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(currentUserSaga);
  sagaMiddleware.run(cartSaga);
  sagaMiddleware.run(itemDetailSaga);
  sagaMiddleware.run(shippingCostSaga);
  sagaMiddleware.run(taxRateSaga);
  return store;
}

