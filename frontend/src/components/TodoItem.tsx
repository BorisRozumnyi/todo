import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ToDoItem } from '../types';
import { Col, Row } from './Container';
import { Button } from './Button';
import { TodoForm } from './TodoForm';
import * as actions from '../actions';

type Props = {
  todo: ToDoItem;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const { title, _id, created } = todo;
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const handleEditTodo = () => {
    setEdit(true);
  };
  const handleDeleteTodo = () => {
    dispatch(actions.deleteToDoItem(_id || created));
  };
  return (
    <Wrapper>
      {!edit && (
        <Row>
          <Col>
            <h3>{title}</h3>
          </Col>
          <StyledCol>
            <Button text="edit" handleClick={handleEditTodo} />
          </StyledCol>
          <StyledCol>
            <Button text="delete" handleClick={handleDeleteTodo} />
          </StyledCol>
        </Row>
      )}
      {edit && <TodoForm todo={todo} closeEdit={() => setEdit(false)} />}
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
`;
