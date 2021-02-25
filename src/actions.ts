import { action, createAction } from 'typesafe-actions';
import { ToDoItem, ToDoItemID } from './types';

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

export const addToDoItem = createAction('ADD_TODO_ITEM')<ToDoItem>();
export const deleteToDoItem = createAction('DELETE_TODO_ITEM')<ToDoItemID>();
