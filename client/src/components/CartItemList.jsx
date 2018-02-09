import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

function mapStateToProps(state) {
  return {
    items: state.cartItems,
    fetched: !!state.cartItems
  };
}

const CartItemList = ({items, fetched}) => {
  return (
    <div>
      {fetched ? 
      <div>
        {items.map(item => <CartItem key={item.id} {...item} />)}
      </div> : <p>Please wait...</p>}
    </div>
  );
};

export default connect(
  mapStateToProps,
)(CartItemList);