// src/store/chat/types.ts

import { rootReducer } from "./reducer";

export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
}

// src/store/system/types.ts

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

// src/store/system/types.ts
export const UPDATE_SESSION = 'UPDATE_SESSION';

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}
export type SystemActionTypes = UpdateSessionAction;

// src/store/chat/types.ts
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';


export type RootState = ReturnType<typeof rootReducer>;
