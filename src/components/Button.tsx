import React, { ReactEventHandler } from 'react';
import styled from 'styled-components';

type Props = {
  handleClick: ReactEventHandler;
  text?: string;
  children?: React.ReactNode;
};

export const Button: React.FC<Props> = ({ handleClick, text, children }) => {
  return (
    <StyledButton onClick={handleClick}>
      {text}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  color: #63abb7;
  font-weight: bold;
  border-radius: 3px;
  padding: 1rem 3rem;
  margin: 0.5rem 1rem;
  background: transparent;
  border: 2px solid #63abb7;
  transition: 0.2s all;
  &:hover {
    background: #63abb7;
    color: white;
  }
`;
