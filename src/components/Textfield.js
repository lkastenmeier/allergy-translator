import React from "react";
import styled from "styled-components";

const TextInput = styled.textarea`
  border: 3px solid #e3ebee;
  background-color: #bfccdd;
  color: red;
  height: 275px;
  width: 350px;
  padding: 5px;
  font-size: 28px;
  text-align: center;
  padding: 5px;
`;

export default function Textfield({ placeholder }) {
  return <TextInput placeholder={placeholder} />;
}
