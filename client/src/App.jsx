import React from 'react';

import CartManageView from './components/CartManageView';
import CheckOutView from './components/CheckOutView';

const App = ({isCheckingOut}) => {
  return (
    <div>
      {isCheckingOut ? <CheckOutView /> : <CartManageView />}
    </div>
  );
};

export default App;