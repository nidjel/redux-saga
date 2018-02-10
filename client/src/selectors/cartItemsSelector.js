import {createSelector} from 'reselect';

export const cartItemsSelector = createSelector(
   state => state.cartItems,
   cartItems => cartItems
);