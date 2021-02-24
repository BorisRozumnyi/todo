import React from 'react';
import styled from 'styled-components';
import { ToDoItem } from '../types';
import { Col, Row } from './Container';
import { Button } from './Button';


type Props = {
  todo: ToDoItem;
};

export const TodoItem: React.FC<Props> = ({ todo: { title, id } }) => {

  return (
    <Wrapper>
      <Row>
        <Col>
          <h3>{title}</h3>
        </Col>
        <StyledCol>
          <Button text='edit' handleClick={() => console.log('edit',)} />
        </StyledCol>
        <StyledCol>
          <Button text='delete' handleClick={() => console.log('delete')} />
        </StyledCol>
      </Row>
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

const StyledCol = styled(Col)`
  max-width: 20%;
`
