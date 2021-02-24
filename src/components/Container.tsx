import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};


export const Container: React.FC<Props> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 312px;
  @media (min-width: 768px) {
    max-width: 512px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -15px;
`;

export const Col = styled.div`
  display: flex;
  max-width: 50%;
  width: 50%;
  padding: 0 15px;
`;

