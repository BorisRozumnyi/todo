import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Container } from './components/Container';
import { store } from './store';
import { AddTodo } from './components/TodoForm';

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <AddTodo />
      </Container>
    </Provider>
  );
}
