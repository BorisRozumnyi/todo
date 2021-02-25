import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Container } from './components/Container';
import { store } from './store';
// import { Counter } from './Counter';
import { AddTodo } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        {/* <Counter /> */}
        <AddTodo />
        <TodoList />
      </Container>
    </Provider>
  );
}
