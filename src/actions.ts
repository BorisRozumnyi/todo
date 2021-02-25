import { createAction } from 'typesafe-actions';
import { ToDoItem, ToDoItemID } from './types';

export const addToDoItem = createAction('ADD_TODO_ITEM')<ToDoItem>();
export const deleteToDoItem = createAction('DELETE_TODO_ITEM')<ToDoItemID>();
export const updateToDoItem = createAction('UPDATE_TODO_ITEM')<ToDoItem>();
