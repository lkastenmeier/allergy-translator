import React from "react";
import styled from "styled-components";

const TextInput = styled.textarea`
  border: 3px solid #e3ebee;
  background-color: #bfccdd;
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
