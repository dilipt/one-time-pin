import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Colours} from './Theme';

const Input = styled.input`
  font-size: 16px;
  border: 1px solid ${Colours.PURPLE_MOUNTAIN_MAJESTY};
  width: 60px;
  height: 60px;
  text-align: center;
  border-radius: 3px;
`;

export const PinDigit = forwardRef(({value, changeHandler, pasteHandler}, ref) => {
  function valueChanged(e) {
    if (e.target.value !== '') {
      changeHandler(e.target.value);
    }
  };

  function checkKey(e) {
    if (e.key === 'Backspace') {
      changeHandler(e.key);
    }
  };

  return (
    <Input
      type="text"
      ref={ref}
      maxLength="1"
      pattern="\d{1}"
      onKeyDown={checkKey}
      onChange={valueChanged}
      onPaste={pasteHandler}
      value={value}
    />
  );
});

PinDigit.propTypes = {
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  pasteHandler: PropTypes.func.isRequired,
};
