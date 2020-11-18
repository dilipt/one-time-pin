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
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
`;

const pinRegex = new RegExp(/^\d{6}$/);

export const PinEntry = ({ submitHandler }) => {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const submitBtn = useRef(null);

  const onUpdate = (digitIdx) => (newValue) => {
    if (newValue === 'Backspace') {
      if (pin[digitIdx] === '') {
        setPin(pin.map((value, i) => (i === digitIdx - 1 ? '' : value)));
        refs[(digitIdx === 0 ? 0 : digitIdx - 1)].current.focus();
      } else {
        setPin(pin.map((value, i) => (i === digitIdx ? '' : value)));
      }
    } else {
      setPin(pin.map((value, i) => (i === digitIdx ? newValue : value)));
      refs[(digitIdx + 1) % 6].current.focus();
    }
  };

  const onPaste = (e) => {
    const digits = e.clipboardData.getData('Text');
    if (digits.length === pin.length) setPin(digits.split(''));
  };

  useEffect(() => {
    const pinToSubmit = pin.join('');
    if (pinToSubmit.length === refs.length && pinRegex.test(pinToSubmit)) {
      submitBtn.current.removeAttribute('disabled');
      submitBtn.current.focus();
    } else {
      submitBtn.current.setAttribute('disabled', true);
    }
  }, [pin]);

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  return (
    <>
      <PinContainer>
        {pin.map((digit, i) => (
          <PinDigit
            ref={refs[i]}
            position={i}
            value={digit}
            changeHandler={onUpdate(i)}
            pasteHandler={onPaste}
          />
        ))}
      </PinContainer>
      <SubmitButton ref={submitBtn} onClick={submitHandler(pin.join(''))}>Submit</SubmitButton>
    </>
  );
};

PinEntry.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};
