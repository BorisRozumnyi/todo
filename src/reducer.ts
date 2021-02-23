import { combineReducers } from 'redux';
import {
  ToDoState,
  TodoItemActionsType,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  ChatActionTypes,
  ChatState,
  DELETE_MESSAGE,
  SEND_MESSAGE,
  SystemActionTypes,
  SystemState,
  UPDATE_SESSION,
} from './types';

const initialStateToDo: ToDoState = {
  todos: [],
};

export function todoReducer(
  state = initialStateToDo,
  action: TodoItemActionsType
): ToDoState {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO_ITEM:
      return {
        todos: state.todos.filter(
          (todos) => todos.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

const initialState: ChatState = {
  messages: [],
};

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload],
      };
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          (message) => message.timestamp !== action.meta.timestamp
        ),
      };
    default:
      return state;
  }
}

const initialStateSystem: SystemState = {
  loggedIn: false,
  session: '',
  userName: '',
};

export function systemReducer(
  state = initialStateSystem,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
  counter: (state: any, action: any) => state || 0,
});

export type RootState = ReturnType<typeof rootReducer>;

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
