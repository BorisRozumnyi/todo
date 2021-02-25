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
  width: 100%;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #63abb7;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    background: #63abb7;
    color: white;
  }
`;
