import React, { useState } from 'react';
import styled from 'styled-components';
import { PinDigit } from './PinDigit';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30vw;
`;

export function PinEntry() {
  const [pin, setPin] = useState(['', '', '', '', '', '']);

  function onUpdate(indexOfUpdatedDigit) {
    return (value) => setPin(pin.map((originalValue, idx) => (idx === indexOfUpdatedDigit ? value : originalValue)));
  }

  function onPaste(e) {
    const digits = e.clipboardData.getData('Text');
    if (digits.length === pin.length) setPin(digits.split(''));
  }

  return (
    <Container>
      {pin.map((digit, i) => <PinDigit position={i} value={digit} changeHandler={onUpdate(i)} pasteHandler={onPaste} />)}
    </Container>
  );
}
