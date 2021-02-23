import { combineReducers } from 'redux';
// import { ActionType, createReducer } from 'typesafe-actions';
// import * as actions from './actions';

// src/store/chat/types.ts

export interface Message {
  user: string
  message: string
  timestamp: number
}

export interface ChatState {
  messages: Message[]
}

// src/store/system/types.ts

export interface SystemState {
  loggedIn: boolean
  session: string
  userName: string
}

// src/store/chat/types.ts
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

interface SendMessageAction {
  type: typeof SEND_MESSAGE
  payload: Message
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE
  meta: {
    timestamp: number
  }
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction

// src/store/chat/actions.ts

// import { Message, SEND_MESSAGE, DELETE_MESSAGE, ChatActionTypes } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  }
}

// src/store/system/types.ts
export const UPDATE_SESSION = 'UPDATE_SESSION'

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: SystemState
}

export type SystemActionTypes = UpdateSessionAction

// src/store/system/actions.ts

// import { SystemState, UPDATE_SESSION, SystemActionTypes } from './types'

export function updateSession(newSession: SystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  }
}

// src/store/chat/reducers.ts

// import {
//   ChatState,
//   ChatActionTypes,
//   SEND_MESSAGE,
//   DELETE_MESSAGE
// } from './types'

const initialState: ChatState = {
  messages: []
}

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload]
      }
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          message => message.timestamp !== action.meta.timestamp
        )
      }
    default:
      return state
  }
}

// src/store/system/reducers.ts

// import { SystemState, SystemActionTypes, UPDATE_SESSION } from './types'

const initialStateSystem: SystemState = {
  loggedIn: false,
  session: '',
  userName: ''
}

export function systemReducer(
  state = initialStateSystem,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

// src/store/index.ts

// import { systemReducer } from './system/reducers'
// import { chatReducer } from './chat/reducers'

export const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
})

export type RootState = ReturnType<typeof rootReducer>

// type Payload = {
//   text: string;
// }

// export function todos(state = [], action: <ActionType, Payload>) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([action.text])
//     default:
//       return state
//   }
// }

// export function counter(state = 0, action: Action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

// export const rootReducer = combineReducers({
//   todos,
//   counter,
// });
// export const rootReducer = combineReducers({
//   todos: createReducer({}).handleAction(actions.addItem),
//   counter: createReducer(0).handleAction(actions.increment),
// });
