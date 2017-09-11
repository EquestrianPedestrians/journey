import * as types from './types.js';

export function setData(data) {
  return {
    type: types.SET_DATA,
    data
  }
};