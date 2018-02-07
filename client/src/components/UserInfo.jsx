import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class UserInfo extends Component {
  render() {
    return (
      <div>
        <p>J.R.R Hemingway</p>
        <p>555 La Floridita Way, CAD</p> 
        <p>15551234567</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(UserInfo);