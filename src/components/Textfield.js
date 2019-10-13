import React from "react";
import styled from "styled-components";

const TextInput = styled.textarea`
  border: 3px solid #e3ebee;
  background-color: #bfccdd;
  color: red;
  height: 50%;
  width: 350px;
  padding: 5px;
  font-size: 25px;
  text-align: center;
  padding: 5px;
  font-family: sans-serif;
  margin: 10px;
  padding: 10px;
`;

export default function Textfield({ placeholder }) {
  return <TextInput placeholder={placeholder} />;
}
