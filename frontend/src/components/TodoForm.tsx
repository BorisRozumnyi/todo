import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from './Button';
import { Row, Col } from './Container';
import * as actions from "../actions";
import { ToDoItem } from '../types'





type Props = {
  todo?: ToDoItem;
  closeEdit?: () => void;
};

export const TodoForm: React.FC<Props> = ({ todo, closeEdit }) => {
  const [todoTitle, setTodoTitle] = useState(todo?.title || '');
  const dispatch = useDispatch();

  const handleChanegeTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };
  const handleTodo = () => {
    if (!todo?.created) {
      dispatch(actions.addToDoItem({ title: todoTitle, created: Date.now() }));
    } else {
      dispatch(
        actions.updateToDoItem({
          title: todoTitle,
          created: todo.created,
          _id: todo._id,
        })
      )
      closeEdit && closeEdit();
    }
  };
  return (
    <Wrapper>
      <Row>
        <Col>
          <Input
            type="text"
            onChange={handleChanegeTodoTitle}
            defaultValue={todoTitle}
          />
        </Col>
        <Col>
          <Button
            text={todo?.title ? 'Save' : 'Add Todo'}
            handleClick={handleTodo}
          />
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
