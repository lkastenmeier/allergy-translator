import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputField = styled.input`
  display: flex;
  text-align-last: center;
  width: 50%;
  min-height: 50px;
  margin: 10px auto;
  background-color: ${props => props.theme.light};
  border: 3px solid ${props => props.theme.highlight};
  color: ${props => props.theme.text};
  font-size: 16px;
`;

export default function Searchfield({ input }) {
  function onSearch(event) {
    const { value } = event.target;
    input(value);
  }
  return <InputField placeholder="Your Location" onChange={onSearch} />;
}

Searchfield.propTypes = {
  onChange: PropTypes.func
};
