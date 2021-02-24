import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState, ToDoItem } from '../types';

export const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todoReducer)

  return (
    <Wrapper>
      <h3>Todo List:</h3>
      {todos.length > 0 && todos.map((todo: ToDoItem) => <p>{todo.title}</p>)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #63abb7;
  font-weight: bold;
  border-radius: 3px;
  padding: 1rem 3rem;
  margin: 0.5rem 1rem;
  background: transparent;
  border: 2px solid #63abb7;
`;