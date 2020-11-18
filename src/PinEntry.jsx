import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PinDigit } from './PinDigit';
import { Colours } from './Theme';

const PinContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30vw;
`;

const SubmitButton = styled.button`
  background-color: ${Colours.BLUE_BELL};
  width: 150px;
  padding: 12px 20px;
  border: 1px solid ${Colours.BLUE_BELL};
  border-radius: 3px;
  color: ${Colours.LAVENDER_BLUSH};
`;

export const PinEntry = ({ submitHandler }) => {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const submitRef = useRef(null);

  const onUpdate = (indexOfUpdatedDigit) => (value) => {
    refs[(indexOfUpdatedDigit + 1) % 6].current.focus();
    setPin(pin.map((originalValue, idx) => (idx === indexOfUpdatedDigit ? value : originalValue)));
  };

  const onPaste = (e) => {
    const digits = e.clipboardData.getData('Text');
    if (digits.length === pin.length) setPin(digits.split(''));
  };

  useEffect(() => {
    if (pin.join('').length === pin.length) {
      submitRef.current.focus();
    }
  }, [pin]);

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  return (
    <>
      <PinContainer>
        {pin.map((digit, i) => <PinDigit ref={refs[i]} position={i} value={digit} changeHandler={onUpdate(i)} pasteHandler={onPaste} />)}
      </PinContainer>
      <SubmitButton ref={submitRef} onClick={submitHandler(pin.join(''))}>Submit</SubmitButton>
    </>
  );
};

PinEntry.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};
