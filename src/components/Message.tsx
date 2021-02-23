import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './Button';
import * as actions from '../actions'

export const Message = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const handleChanegeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }
  const handleMassage = () => {
    dispatch({ type: 'SEND_MESSAGE', payload: message })
  }
  return (
    <>
      <input type="text" onChange={handleChanegeMessage} />
      <Button text='sendMessage' handleClick={handleMassage} />
    </>
  );
};
