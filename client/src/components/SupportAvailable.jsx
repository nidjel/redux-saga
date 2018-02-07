import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class SupportAvailable extends Component {
  render() {
    return (
      <div>
        <p>Customer service representatives are waiting to assist you.</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(SupportAvailable);