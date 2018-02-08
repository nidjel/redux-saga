import React, { Component } from 'react';
import { connect } from 'react-redux';
import {toggleCheckingOut} from '../actions';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleRequestCheckOut() {
      dispatch(toggleCheckingOut(true));
    }
  };
}

const CheckOutButton = ({handleRequestCheckOut}) => {
  return (
    <div className='text-center checkout-button-container'>
      <button className='btn btn-primary btn-lg' onClick={handleRequestCheckOut} >Check Out</button>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckOutButton);