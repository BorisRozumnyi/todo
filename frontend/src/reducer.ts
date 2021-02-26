import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { ToDoItem } from './types';

export const rootReducer = combineReducers({
  todos: createReducer([] as ToDoItem[])
    .handleAction(actions.getTodos.success, (_state, action) => action.payload)
    .handleAction(actions.addToDoItem, (state, action) => [
      ...state,
      action.payload,
    ])
    .handleAction(actions.deleteToDoItem, (state, action) =>
      state.filter((item) => {
        if (item._id) return item._id !== action.payload;
        return item.created !== action.payload;
      })
    )
    .handleAction(actions.updateToDoItem, (state, action) =>
      state.map((item) => {
        if (item._id === action.payload._id) {
          const updatedItem = {
            title: action.payload.title,
            created: item.created,
            _id: item._id,
          };
          return updatedItem;
        }
        return item;
      })
    ),
});
