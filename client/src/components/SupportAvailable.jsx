import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    serviceAvailability: state.customerServiceAvailability
  };
}

const SupportAvailable = ({serviceAvailability}) => {
  return (
    <div className='customer-service-message'>
      {serviceAvailability ? <p>Customer service representatives are waiting to assist you.</p> : 
      <p>Sorry, there's no one to assist you at this time.</p>}
    </div>
  );
}

export default connect(
  mapStateToProps,
)(SupportAvailable);