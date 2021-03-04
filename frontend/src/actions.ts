import { createAction, createAsyncAction } from 'typesafe-actions';
import { ToDoItem, ToDoItemCreated, ToDoItemID, TodosError } from './types';

export const addToDoItem = createAction('ADD_TODO_ITEM')<ToDoItem>();
export const deleteToDoItem = createAction('DELETE_TODO_ITEM')<
  ToDoItemID | ToDoItemCreated
>();
export const updateToDoItem = createAction('UPDATE_TODO_ITEM')<ToDoItem>();

export const getTodos = createAsyncAction(
  'GET_REQUEST_TODOS_START',
  'GET_REQUEST_TODOS_SUCCESS',
  'GET_REQUEST_TODOS_ERROR'
)<undefined, ToDoItem[], TodosError>();








export const postTodos = createAsyncAction(
  'POST_REQUEST_TODOS_START',
  'POST_REQUEST_TODOS_SUCCESS',
  'POST_REQUEST_TODOS_ERROR'
)<ToDoItem[], ToDoItem, TodosError>();
