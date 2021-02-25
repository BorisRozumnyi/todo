import { ActionType } from 'typesafe-actions';
import { rootReducer } from './reducer';

export type ToDoState = {
  todos: ToDoItem[];
};

export type ToDoItem = {
  title: string;
  id: ToDoItemID;
};

export type ToDoItemID = number;

export type RootState = ReturnType<typeof rootReducer>;

export type RootAction = ActionType<typeof import('./actions')>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}
