import { combineReducers } from 'redux';
import * as whateverReducers from './whatever-reducer.js';

export default combineReducers(Object.assign({}, whateverReducers));