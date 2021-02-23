import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import * as actions from './actions';

export const rootReducer = combineReducers({
  todos: createReducer({}).handleAction(actions.addItem),
  counter: createReducer(0).handleAction(actions.increment),
});
