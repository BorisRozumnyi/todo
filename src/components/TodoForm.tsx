import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from './Button';
import { Row, Col } from './Container';
import * as actions from '../actions'

export const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useDispatch();

  const handleChanegeTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  }
  const handleAddTodo = () => {
    dispatch(actions.addToDoItem({ title: todoTitle, id: Date.now() }))
  }
  return (
    <Wrapper>
      <Row>
        <Col>
          <Input type="text" onChange={handleChanegeTodoTitle} />
        </Col>
        <Col>
          <Button text='add Todo' handleClick={handleAddTodo} />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Input = styled.input`
  border: none;
  border-radius: 3px;
  border: 2px solid #63abb7;
  width: 100%;
  padding: 10px;
`;
const Wrapper = styled.div`
  margin-top: 20px;
  padding: 15px 30px;
  max-width: 100%;
  border-radius: 3px;
  border: 2px solid #63abb7;
`;
