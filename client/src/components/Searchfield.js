import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputField = styled.input`
  display: flex;
  text-align-last: center;
  width: 50%;
  min-height: 50px;
  margin: 10px auto 5px auto;
  background-color: ${props => props.theme.light};
  border: 2px solid ${props => props.theme.highlight};
  color: ${props => props.theme.text};
  font-size: 1rem;
  input:active {
    border-color: transparent;
    border-bottom: 2px solid red;
  }
`;

export default function SearchField({ input }) {
  function onLocationInput(event) {
    const { value } = event.target;
    input(value);
  }
  return <InputField placeholder="Where are you?" onChange={onLocationInput} />;
}

SearchField.propTypes = {
  onChange: PropTypes.func
};
