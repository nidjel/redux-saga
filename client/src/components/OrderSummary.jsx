import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckOutButton from './CheckOutButton';

function getSubtotal(state) {
  return state.cartItems.reduce((sum, cartItem) => {
    const itemDetail = state.items.find(item => cartItem.id === item.id);
    const itemPrice = itemDetail && itemDetail[state.currentUser.country.toLowerCase()];
    return sum += itemPrice * cartItem.quantity;
  }, 0)
}

function mapStateToProps(state) {
  if (state.cartItems && state.items.length === state.cartItems.length) {
    const subtotal = getSubtotal(state);
    const {shippingCost, taxRate} = state;
    return {
      subtotal,
      shippingCost,
      tax: taxRate * (subtotal + shippingCost),
      fetched: true
    };
  } else {
    return {
      fetched: false
    };
  }
}

const OrderSummary = ({subtotal, shippingCost, tax, fetched}) => {
  const total = subtotal + shippingCost + tax;
  return (
      <div>
        <CheckOutButton />
        <h4>Order Summary</h4>
        <table className='table'>
          <tbody>
            <tr>
              <th>Subtotal</th>
              <td>${subtotal ? subtotal : 0}</td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td>${shippingCost ? shippingCost : 0}</td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>${tax ? tax : 0}</td>
            </tr>
            <tr className='total-tr'>
              <th>Total</th>
              <td>${total ? total : 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

export default connect(
  mapStateToProps,
)(OrderSummary);