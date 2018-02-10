import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckOutButton from './CheckOutButton';
import {FETCHED} from '../constants/actionTypes';
import {formatCurrency} from '../utility';

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
    const shippingCost = state.shippingCostFetchStatus === FETCHED ? state.shippingCost : null;
    const tax = shippingCost && state.taxRate ? state.taxRate * (subtotal + shippingCost) : null;
    const fetched = !!(subtotal && shippingCost && tax);
    const total = fetched ? subtotal + shippingCost + tax : null;
    return {
      subtotal,
      shippingCost,
      tax,
      total,
      fetched
    };
  } else {
    return {
      fetched: false
    };
  }
}

const OrderSummary = ({subtotal, shippingCost, tax, fetched, total}) => {
  return (
    <div>
      <CheckOutButton />
      <h4>Order Summary</h4>
      {fetched ? 
        <div>
          <table className='table'>
            <tbody>
              <tr>
                <th>Subtotal</th>
                <td>${subtotal ? formatCurrency(subtotal) : 0}</td>
              </tr>
              <tr>
                <th>Shipping</th>
                <td>${shippingCost ? formatCurrency(shippingCost) : 0}</td>
              </tr>
              <tr>
                <th>Tax</th>
                <td>${tax ? formatCurrency(tax) : 0}</td>
              </tr>
              <tr className='total-tr'>
                <th>Total</th>
                <td>${total ? formatCurrency(total) : 0}</td>
              </tr>
            </tbody>
          </table>
        </div> : <div className='spinner'></div>
      }
    </div>
      
    );
  }

export default connect(
  mapStateToProps,
)(OrderSummary);