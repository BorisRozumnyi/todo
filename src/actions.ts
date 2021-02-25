import { action, createAction } from 'typesafe-actions';
import { ToDoItem, ToDoItemID } from './types';

export const increment = action('INCREMENT');
export const decrement = action('DECREMENT');

export const addItem = createAction('ADD')();

export const addToDoItem = createAction('ADD_TODO_ITEM')<ToDoItem>();
export const deleteToDoItem = createAction('DELETE_TODO_ITEM')<ToDoItemID>();
export const updateToDoItem = createAction('UPDATE_TODO_ITEM')<ToDoItem>();
