import React, { Component } from 'react';
import { connect } from 'react-redux';
import {toggleCheckingOut} from '../actions';

function mapStateToProps(state) {
  return {
    canCheckOut: state.canCheckOut
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleRequestCheckOut() {
      dispatch(toggleCheckingOut(true));
    }
  };
}

const CheckOutButton = ({handleRequestCheckOut, canCheckOut}) => {
  return (
    <div className='text-center checkout-button-container'>
      <button className='btn btn-primary btn-lg' onClick={handleRequestCheckOut} disabled={!canCheckOut} >Check Out</button>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckOutButton);