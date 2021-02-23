import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Container } from './components/Container';
import { store } from './store';
import { Counter } from './Counter';
import { Message } from './components/Message';
import { ListMessages } from './components/ListMessages';
import { AddTodo } from './components/TodoForm';

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Counter />
        <Message />
        <ListMessages />
        <AddTodo />
      </Container>
    </Provider>
  );
}
