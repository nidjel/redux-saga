import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class CheckOutButton extends Component {
  render() {
    return (
      <div>
        <button>Check Out</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(CheckOutButton);