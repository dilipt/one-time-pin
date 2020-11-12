import React, { useState } from 'react';
import styled from 'styled-components';
import { PinDigit } from './PinDigit';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30vw;
`;

export const PinEntry = () => {
  const [pin, setPin] = useState(['', '', '', '', '', '']);

  const onUpdate = (index) => (value) => {
    setPin(pin.map((originalValue, idx) => (idx === index ? value : originalValue)));
  };

  return (
    <Container>
      {pin.map((_, i) => <PinDigit position={i} changeHandler={onUpdate(i)} />)}
    </Container>
  );
};
