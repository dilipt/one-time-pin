import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Colours } from './Theme';

const Input = styled.input`
  font-size: 16px;
  border: 1px solid ${Colours.PURPLE_MOUNTAIN_MAJESTY};
  width: 60px;
  height: 60px;
  text-align: center;
  border-radius: 3px;
`;

export function PinDigit({ value, changeHandler, pasteHandler }) {
  function valueChanged(e) {
    changeHandler(e.target.value);
  }

  return (
    <Input type="text" maxLength="1" pattern="\d" onChange={valueChanged} onPaste={pasteHandler} value={value} />
  );
}

PinDigit.propTypes = {
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  pasteHandler: PropTypes.func.isRequired,
};
