import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ToDoItem, ToDoItemID } from '../types';
// import { Col, Row } from './Container';
import { Button } from './Button';
// import { TodoForm } from './TodoForm';
import * as actions from '../actions'


type Props = {
  todo: ToDoItem;
};

export const TodoItem: React.FC<Props> = ({ todo: { title, id } }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false)

  const handleEditTodo = (id: ToDoItemID) => {
    setEdit(true)
    // dispatch(actions.updateToDoItem({ title: 'new', id }))
  }
  const handleDeleteTodo = (id: ToDoItemID) => {
    dispatch(actions.deleteToDoItem(id))
  }
  return (
    <Wrapper>
      {!edit &&
        <>
          <h3>{title}</h3>
          <Button text='edit' handleClick={() => handleEditTodo(id)} />
          <Button text='delete' handleClick={() => handleDeleteTodo(id)} />
        </>
      }
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
