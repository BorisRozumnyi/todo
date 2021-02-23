import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './components/Button';
// import * as actions from './actions'
import { RootState } from './types';

export const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state: RootState) => state,);
  const handleIncrement = () => {
    console.log('dispatch(actions.increment)')
  };
  const handleDecrement = () => {
    console.log('dispatch(actions.decrement)')
  };
  return (
    <>
      <Button text="+" handleClick={handleIncrement} />
      <Button text="-" handleClick={handleDecrement} />
      <span>{counter}</span>
    </>
  );
};
