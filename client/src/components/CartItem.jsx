import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const CartItem = ({name, price, description, quantity, fetched}) => {
  return (
    <div>
      {fetched ? 
      <div>
        <h5>{name}</h5>
        <div>${price}</div>
        <p>{description}</p>
        <section>
          <span className='item-quantity'>Quantity: {quantity}</span>
          <button className='btn btn-secondary'>-</button>
          <button className='btn btn-secondary'>+</button>
        </section>
      </div> : <div className="spinner"></div>}
      
    </div>
  );
};

export default connect(
  mapStateToProps,
)(CartItem);