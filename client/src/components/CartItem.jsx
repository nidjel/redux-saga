import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

const CartItem = ({item}) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>${item.usd}</p>
      <p>{item.description}</p>
      <span>Quantity:{item.quantity}</span>
      <button>-</button><button>+</button>
    </div>
  );
};

export default connect(
  mapStateToProps,
)(CartItem);