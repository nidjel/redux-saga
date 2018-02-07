import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class UserInfo extends Component {
  render() {
    return (
      <section>
        <p>
          J.R.R Hemingway<br/>
          555 La Floridita Way, CAD<br/>
          15551234567
        </p>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
)(UserInfo);