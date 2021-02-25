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
    )
    .handleAction(actions.updateToDoItem, (state, action) =>
      state.map((item) => {
        if (item.id === action.payload.id) {
          const updatedItem = {
            title: action.payload.title,
            id: item.id,
          }
          return updatedItem;
        }
        return item;
      })
    ),
  counter: (state: any, action: any) => state || 0,
});
