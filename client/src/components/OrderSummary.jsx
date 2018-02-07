import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckOutButton from './CheckOutButton';

function mapStateToProps(state) {
  return {

  };
}

class OrderSummary extends Component {
  render() {
    return (
      <div>
        <CheckOutButton />
       
        <table>
          <thead><tr><th>Order Summary</th></tr></thead>
          <tbody>
            <tr>
              <th>Subtotal</th>
              <th>$652.00</th>
            </tr>
            <tr>
              <th>Shipping</th>
              <th>$54.50</th>
            </tr>
            <tr>
              <th>Tax</th>
              <th>$134.24</th>
            </tr>
            <tr>
              <th>Total</th>
              <th>$840.74</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(OrderSummary);