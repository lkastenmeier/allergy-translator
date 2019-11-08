import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputField = styled.input`
  display: flex;
  text-align-last: center;
  width: 95%;
  min-height: 50px;
  margin: 10px auto 5px auto;
  background-color: ${props => props.theme.light};
  border: 2px solid ${props => props.theme.highlight};
  color: ${props => props.theme.text};
  font-size: 1rem;
  @media (min-width: 500px) {
    width: 300px;
  }
  :focus {
    outline: none;
  }
`;

export default function Searchfield({ input, placeholder }) {
  function onLocationInput(event) {
    const { value } = event.target;
    input(value);
  }
  return <InputField placeholder={placeholder} onChange={onLocationInput} />;
}

Searchfield.propTypes = {
  onChange: PropTypes.func
};
