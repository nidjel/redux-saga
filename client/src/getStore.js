import {createStore} from 'redux';

export default function(reducer, initialState={}) {
  let store = createStore(reducer, initialState);
  return store;
}