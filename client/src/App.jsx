import React from 'react';
import { connect } from 'react-redux';

import CartManageView from './components/CartManageView';
import CheckOutView from './components/CheckOutView';

function mapStateToProps(state) {
  return {
    isCheckingOut: state.isCheckingOut,
  };
}

const App = ({isCheckingOut}) => {
  return (
    <div className='container'>
      {isCheckingOut ? <CheckOutView /> : <CartManageView />}
    </div>
  );
};

export default connect(
  mapStateToProps,
)(App);