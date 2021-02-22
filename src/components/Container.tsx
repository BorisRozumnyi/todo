import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 312px;
  @media (min-width: 768px) {
    max-width: 512px;
  }
`;

export const Container: React.FC<Props> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
