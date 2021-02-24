import React from 'react';
import styled from 'styled-components';
import { ToDoItem, ToDoItemID } from '../types';
import { Col, Row } from './Container';
import { Button } from './Button';
import * as actions from '../actions'
import { useDispatch } from 'react-redux';


type Props = {
  todo: ToDoItem;
};

export const TodoItem: React.FC<Props> = ({ todo: { title, id } }) => {
  const dispatch = useDispatch();

  const handleEditTodo = (id: ToDoItemID) => {
    console.log(actions.deleteToDoItem(id))
  }
  const handleDeleteTodo = (id: ToDoItemID) => {
    dispatch(actions.deleteToDoItem(id))
  }
  return (
    <Wrapper>
      <Row>
        <Col>
          <h3>{title}</h3>
        </Col>
        <StyledCol>
          <Button text='edit' handleClick={() => handleEditTodo(id)} />
        </StyledCol>
        <StyledCol>
          <Button text='delete' handleClick={() => handleDeleteTodo(id)} />
        </StyledCol>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 10px;
  padding: 5px 10px;
  color: #63abb7;
  font-weight: bold;
  border-radius: 3px;
  border: 2px solid #63abb7;
`;

const StyledCol = styled(Col)`
  max-width: 20%;
`
