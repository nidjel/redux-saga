import fetch from 'isomorphic-fetch';
import { call, put, take, select, apply } from 'redux-saga/effects';

import {currentUserSaga} from './currentUserSaga';
import {GET_CURRENT_USER_INFO} from '../constants/actionTypes';
import {setCurrentUserInfo} from '../actions';
import {currentUserSelector} from '../selectors';

describe('Current user saga', () => {
  it("Fetches and puts the current user's data", () => {
    const id = `UTH1983`;
    const user = {name:"Rick Pot"};
    const json = ()=>{};
    const response = {json};
    const gen = currentUserSaga();
    
    expect(gen.next().value).toEqual(take(GET_CURRENT_USER_INFO));
    expect(gen.next({id}).value).toEqual(call(fetch,`http://localhost:8081/user/${id}`));
    expect(gen.next(response).value).toEqual(apply(response, json));
    expect(gen.next(user).value).toEqual(put(setCurrentUserInfo(user)));
    expect(gen.next().value).toEqual(select(currentUserSelector));
  })
})