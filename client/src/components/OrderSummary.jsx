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
        <h4>Order Summary</h4>
        <table className='table'>
          <tbody>
            <tr>
              <th>Subtotal</th>
              <td>$652.00</td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td>$54.50</td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>$134.24</td>
            </tr>
            <tr className='total-tr'>
              <th>Total</th>
              <td>$840.74</td>
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