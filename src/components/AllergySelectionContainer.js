import React from "react";
import styled from "styled-components";

const SelectionContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  background-color: transparent;
`;

export default function AllergySelectionContainer({ children }) {
  return <SelectionContainer>{children}</SelectionContainer>;
}