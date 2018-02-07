import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import getStore from './getStore';
// import * as reducers from './reducers';
import App from './App';

ReactDOM.render(
  <Provider store={getStore((state, action) => state)}>
    <App isCheckingOut={false} />
  </Provider>
, document.getElementById('AppContainer'));