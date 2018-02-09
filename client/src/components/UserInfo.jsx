import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return state.currentUser ? {
    ...state.currentUser,
    fetched: true
  } : {
    fetched: false
  };
}

const UserInfo = ({name, address1, phone, country, fetched}) => {
  return (
    <section className='current-user' >
      {fetched ? 
      <p>
        {name}<br/>
        {address1}, {country}<br/>
        {phone}
      </p>
      : <p>Please wait while we fetch your user info.</p>
      }
      
    </section>
  );
}

export default connect(
  mapStateToProps,
)(UserInfo);