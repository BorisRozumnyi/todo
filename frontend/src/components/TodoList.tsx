import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState, ToDoItem } from '../types';
import { Col, Row } from './Container';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state)

  return (
    <Wrapper>
      <Row>
        <Col>
          <h3>Todo List:</h3>
        </Col>
      </Row>
      {todos.length > 0 && todos.map((todo: ToDoItem) => <TodoItem todo={todo} key={todo.id} />)}
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