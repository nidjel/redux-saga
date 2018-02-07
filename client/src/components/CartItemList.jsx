import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

function mapStateToProps(state) {
  return {

  };
}

const items = JSON.parse('[{"id":"I10000","name":"Velvet Mousepad","description":"Your mouse never had it so good.","usd":129.95,"cad":175.85,"img":"velvet-mousepad.png","quantityAvailable":100000,"weight":0.8},{"id":"I20000","name":"Wood-Grain USB Cable","description":"This cable matches any mahogany or oak-based computer chassis.","usd":35.5,"cad":55.6,"img":"usb-cable.png","quantityAvailable":3,"weight":0.2}]');

const CartItemList = () => {
  return (
    <div>
      {items.map(item => <CartItem key={item.id} item={item} />)}
    </div>
  );
};

export default connect(
  mapStateToProps,
)(CartItemList);