import { action, createAction } from 'typesafe-actions';
import {
  ADD_TODO_ITEM,
  ChatActionTypes,
  DELETE_MESSAGE,
  DELETE_TODO_ITEM,
  Message,
  SEND_MESSAGE,
  SystemActionTypes,
  SystemState,
  ToDoItem,
  TodoItemActionsType,
  ToDoItemID,
  UPDATE_SESSION,
} from './types';

export const increment = action('INCREMENT');
export const decrement = action('DECREMENT');

export const addItem = createAction('ADD')();

// export function addToDoItem(newTodo: ToDoItem): TodoItemActionsType {
//   return {
//     type: ADD_TODO_ITEM,
//     payload: newTodo,
//   };
// }
// export function deleteToDoItem(removedTodoId: ToDoItemID): TodoItemActionsType {
//   return {
//     type: DELETE_TODO_ITEM,
//     payload: removedTodoId,
//   };
// }

export const addToDoItem = createAction(
  'ADD_TODO_ITEM',
)<ToDoItem>();
export const deleteToDoItem = createAction(
  'DELETE_TODO_ITEM',
)<ToDoItemID>();

export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
}

export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  };
}

export function updateSession(newSession: SystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession,
  };
}
