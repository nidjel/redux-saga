import React from 'react';
import UserInfo from './UserInfo';
import CartItemList from './CartItemList';
import SupportAvailable from './SupportAvailable';
import OrderSummary from './OrderSummary';

const CartManageView = () => {
  return (
    <div>
      <section className='row'>
        <section className='col-6'>
            <h1>SagaCart</h1>
        </section>
      </section>

      <section className='row'>
        <section className='col-6'>
          <UserInfo />
          <h3>Your Cart</h3>
          <CartItemList />
        </section>
        <section className='col-6'>
          <OrderSummary />
        </section>
      </section>
      <SupportAvailable />
    </div>
  );
};

export default CartManageView;