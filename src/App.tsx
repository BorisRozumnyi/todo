import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';

export const App = () => {
  return (
    <Container>
      <Button text="add new todo" handleClick={() => console.log("click")} />
    </Container>
  );
}
