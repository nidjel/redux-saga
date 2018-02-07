import React from 'react';
import UserInfo from './UserInfo';
import CartItemList from './CartItemList';
import SupportAvailable from './SupportAvailable';
import OrderSummary from './OrderSummary';

const CartManageView = () => {
  return (
    <div>
      <div>
        <h1>Saga Cart</h1>
        <UserInfo />
        <h2>Your Cart</h2>
        <CartItemList />
        <SupportAvailable />
      </div>
      <div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartManageView;