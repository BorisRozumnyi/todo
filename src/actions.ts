import { action, createAction } from 'typesafe-actions';

export const increment = action('INCREMENT');
export const decrement = action('DECREMENT');

export const addItem = createAction('ADD')();
