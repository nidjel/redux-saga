import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

const CartItem = ({item}) => {
  return (
    <div>
      <h5>{item.name}</h5>
      <div>${item.usd}</div>
      <p>{item.description}</p>
      <section>
        <span className='item-quantity'>Quantity:{item.quantity}</span>
        <button className='btn btn-secondary'>-</button>
        <button className='btn btn-secondary'>+</button>
      </section>
    </div>
  );
};

export default connect(
  mapStateToProps,
)(CartItem);