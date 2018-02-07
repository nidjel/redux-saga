import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class CheckOutButton extends Component {
  render() {
    return (
      <div className='text-center checkout-button-container'>
        <button className='btn btn-primary btn-lg'>Check Out</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(CheckOutButton);