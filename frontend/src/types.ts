import { ActionType } from 'typesafe-actions';
import { rootReducer } from './reducer';

export type ToDoState = {
  todos: ToDoItem[];
};

export type ToDoItem = {
  title: ToDoItemTitle;
  created: ToDoItemCreated;
  _id?: ToDoItemID;
};
export type ToDoItemID = string;
export type ToDoItemCreated = number;
export type ToDoItemTitle = string;

export type TodosError = {
  message: string;
};

export type RootState = ReturnType<typeof rootReducer>;

export type RootAction = ActionType<typeof import('./actions')>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}
