import React from 'react';

import CartManageView from './components/CartManageView';
import CheckOutView from './components/CheckOutView';

const App = ({isCheckingOut}) => {
  return (
    <div className='container'>
      {isCheckingOut ? <CheckOutView /> : <CartManageView />}
    </div>
  );
};

export default App;