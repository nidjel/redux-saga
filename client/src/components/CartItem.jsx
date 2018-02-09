import React, { Component } from 'react';
import { connect } from 'react-redux';

import {increaseItemQuantity, decreaseItemQuantity} from '../actions';

function mapStateToProps(state, ownProps) {
  const item = state.items.find(item => item.id === ownProps.id);
  if (item) {
    const price = item[state.currentUser.country.toLowerCase()];
    const {name, description} = item;
    return {
      name,
      price,
      description,
      fetched: true
    };
  } else {
    return {
      fetched: false
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleDecreaseItemQuantityClick: (id) => () => dispatch(decreaseItemQuantity(id)),
    handleIncreaseItemQuantityClick: (id) => () => dispatch(increaseItemQuantity(id))
  }
}

const CartItem = ({id, name, price, description, quantity, fetched, handleDecreaseItemQuantityClick, handleIncreaseItemQuantityClick}) => {
  return (
    <div>
      {fetched ? 
      <div>
        <h5>{name}</h5>
        <div>${price}</div>
        <p>{description}</p>
        <section>
          <span className='item-quantity'>Quantity: {quantity}</span>
          <button className='btn btn-secondary' onClick={handleDecreaseItemQuantityClick(id)} >-</button>
          <button className='btn btn-secondary' onClick={handleIncreaseItemQuantityClick(id)} >+</button>
        </section>
      </div> : <div className="spinner"></div>}
      
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);