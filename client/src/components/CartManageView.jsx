import React from 'react';
import UserInfo from './UserInfo';
import CartItemList from './CartItemList';
import SupportAvailable from './SupportAvailable';
import OrderSummary from './OrderSummary';

const CartManageView = () => {
  return (
    <div>
      <h1>Saga Cart</h1>
      <UserInfo />
      <CartItemList />
      <SupportAvailable />
      <OrderSummary />
    </div>
  );
};

export default CartManageView;