/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PinEntry } from './PinEntry';
import { Colours } from './Theme';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${Colours.SPACE_CADET};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Heading = styled.div`
  font-size: 20px;
  color: ${Colours.LAVENDER_BLUSH};
`;

const SubmitButton = styled.button`
  background-color: ${Colours.BLUE_BELL};
  width: 150px;
  padding: 12px 20px;
  border: 1px solid ${Colours.BLUE_BELL};
  border-radius: 3px;
  color: ${Colours.LAVENDER_BLUSH};
`;

export function OneTimePin({ email }) {
  function onSubmit(e) {
    alert(e.target.value);
  }

  return (
    <Background>
      <Container>
        <Heading>Please enter the PIN that was sent to {email}:</Heading>
        <PinEntry />
        <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
      </Container>
    </Background>
  );
}

OneTimePin.propTypes = {
  email: PropTypes.string.isRequired,
};
