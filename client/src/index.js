import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import getStore from './getStore';
import reducer from './reducers';
import App from './App';
import {getCurrentUserInfo, setClientId} from './actions';
import initialState from './reducers/initialState';

const store = getStore(reducer);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
, document.getElementById('AppContainer'));

store.dispatch(getCurrentUserInfo('U10000'));
store.dispatch(setClientId(Math.random()));