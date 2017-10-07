import * as types from '../actions/types.js';
import { createReducer } from '../utils/redux_helpers.js';

export const data = createReducer({}, {
  [types.SET_DATA](state, action) {
    return action.data;
  }
})