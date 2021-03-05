import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, ToDoItem } from '../types';
import { Col, Row } from './Container';
import { TodoItem } from './TodoItem';
import { Button } from './Button';
import * as actions from '../actions';

export const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getTodos.request());
  }, [dispatch]);
  const todos = useSelector((state: RootState) => state.todos);

  const subbmitTodos = () => {
    dispatch(actions.postTodos.request(todos));
  };

  return (
    <Wrapper>
      <Row>
        <Col>
          <h3>Todo List:</h3>
        </Col>
      </Row>
      {todos.length > 0 &&
        todos.map((todo: ToDoItem) => (
          <TodoItem todo={todo} key={todo._id || todo.created} />
        ))}
      <StyledButtonCustom text="Submit" handleClick={subbmitTodos} />
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

const StyledButtonCustom = styled(Button)`
  margin-top: 10px;
`;
