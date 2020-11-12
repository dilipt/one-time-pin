import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Colours } from './Theme';

const Input = styled.input`
  font-size: 16px;
  border: 1px solid ${Colours.PURPLE_MOUNTAIN_MAJESTY};
  width: 60px;
  height: 60px;
  text-align: center;
`;

export const PinDigit = ({ position, changeHandler }) => {
  const [value, setValue] = useState('');

  const valueChanged = (e) => {
    setValue(e.target.value);
    changeHandler(e.target.value);
  };

  return (
    <Input type="text" maxLength="1" pattern="\d" onChange={valueChanged} value={value} />
  );
};

PinDigit.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
};
