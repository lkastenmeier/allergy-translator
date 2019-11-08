import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TextInput = styled.textarea`
  margin: 10px;
  height: 100%;
  width: 85%;
  padding: 5px;
  border: 3px solid ${props => props.theme.light};
  background-color: ${props => props.theme.medium};
  color: red;
  font-size: 1.5rem;
  text-align: center;
  font-family: sans-serif;
  ::-webkit-input-placeholder {
    color: red;
  }
  :focus {
    outline: 0px solid transparent;
  }
`;

export default function Textfield({ placeholder }) {
  return <TextInput defaultValue={placeholder} />;
}

Textfield.propTypes = {
  placeholder: PropTypes.string
};
