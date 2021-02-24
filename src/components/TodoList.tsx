import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState, ToDoItem } from '../types';
import { Col, Row } from './Container';

export const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todoReducer)

  return (
    <Wrapper>
      <Row>
        <Col>
          <h3>Todo List:</h3>
        </Col>
      </Row>
        {todos.length > 0 && todos.map((todo: ToDoItem) => <p>{todo.title}</p>)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 10px;
  padding: 15px 30px;
  color: #63abb7;
  font-weight: bold;
  border-radius: 3px;
  background: transparent;
  border: 2px solid #63abb7;
`;