import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Container } from './components/Container';
import { store } from './store';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Provider>
  );
};
