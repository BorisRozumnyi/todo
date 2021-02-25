import { createAction, createAsyncAction } from 'typesafe-actions';
import { ToDoItem, ToDoItemID, TodosError } from './types';

export const addToDoItem = createAction('ADD_TODO_ITEM')<ToDoItem>();
export const deleteToDoItem = createAction('DELETE_TODO_ITEM')<ToDoItemID>();
export const updateToDoItem = createAction('UPDATE_TODO_ITEM')<ToDoItem>();

export const postTodos = createAsyncAction(
  'POST_REQUEST_TODOS_START',
  'POST_REQUEST_TODOS_SUCCESS',
  'POST_REQUEST_TODOS_ERROR',
)<ToDoItem[], ToDoItem, TodosError>();