import { action, createAction } from 'typesafe-actions';
import { ChatActionTypes, DELETE_MESSAGE, Message, SEND_MESSAGE, SystemActionTypes, SystemState, UPDATE_SESSION } from './types';

export const increment = action('INCREMENT');
export const decrement = action('DECREMENT');

export const addItem = createAction('ADD')();

export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
}

export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  };
}

export function updateSession(newSession: SystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession,
  };
}
