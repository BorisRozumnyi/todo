import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { ToDoItem } from './types';

export const rootReducer = combineReducers({
  todos: createReducer([] as ToDoItem[])
    .handleAction(actions.addToDoItem, (state, action) => [
      ...state,
      action.payload,
    ])
    .handleAction(actions.deleteToDoItem, (state, action) =>
      state.filter((item) => item.id !== action.payload)
    ),
  counter: (state: any, action: any) => state || 0,
});

// type Payload = {
//   text: string;
// }

// export function todos(state = [], action: <ActionType, Payload>) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([action.text])
//     default:
//       return state
//   }
// }

// export function counter(state = 0, action: Action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

// export const rootReducer = combineReducers({
//   todos,
//   counter,
// });
// export const rootReducer = combineReducers({
//   todos: createReducer({}).handleAction(actions.addItem),
//   counter: createReducer(0).handleAction(actions.increment),
// });
