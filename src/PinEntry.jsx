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
      <PinDigit changeHandler={onUpdate(0)} />
      <PinDigit changeHandler={onUpdate(1)} />
      <PinDigit changeHandler={onUpdate(2)} />
      <PinDigit changeHandler={onUpdate(3)} />
      <PinDigit changeHandler={onUpdate(4)} />
      <PinDigit changeHandler={onUpdate(5)} />
    </Container>
  );
};
