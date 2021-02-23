import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './Button';
import * as actions from '../actions'
import { ADD_TODO_ITEM } from '../types';

export const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useDispatch();

  const handleChanegeTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  }
  const handleAddTodo = () => {
    dispatch({ type: ADD_TODO_ITEM, payload: todoTitle })
  }
  return (
    <>
      <input type="text" onChange={handleChanegeTodoTitle} />
      <Button text='add Todo' handleClick={handleAddTodo} />
    </>
  );
};
