import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TextInput = styled.textarea`
  border: 3px solid ${props => props.theme.light};
  background-color: ${props => props.theme.medium};
  color: red;
  height: 100%;
  width: 95%;

  padding: 5px;
  font-size: 25px;
  text-align: center;
  padding: 5px;
  font-family: sans-serif;
  margin: 10px;
  padding: 10px;
  ::-webkit-input-placeholder {
    color: red;
  }
`;

export default function Textfield({ placeholder }) {
  return <TextInput defaultValue={placeholder} />;
}

Textfield.propTypes = {
  placeholder: PropTypes.string
};
