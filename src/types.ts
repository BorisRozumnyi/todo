import { rootReducer } from './reducer';

export type ToDoList = ToDoItem[];

export type ToDoItem = {
  title: string;
  id: ToDoItemID;
};

export type ToDoItemID = string;

export type addToDoItemAction = {
  type: typeof ADD_TODO_ITEM;
  payload: ToDoItem;
};

export type deleteToDoItemAction = {
  type: typeof DELETE_TODO_ITEM;
  payload: ToDoItemID;
};

export type toDoItemActionsType = addToDoItemAction | deleteToDoItemAction;
export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
}

export interface SystemState {
  loggedIn: boolean;
  session: string;
  userName: string;
}

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction;

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}
export type SystemActionTypes = UpdateSessionAction;

export const UPDATE_SESSION = 'UPDATE_SESSION';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';

export type RootState = ReturnType<typeof rootReducer>;
