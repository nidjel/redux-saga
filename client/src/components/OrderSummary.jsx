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
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(OrderSummary);