import React from "react";
import styled from "styled-components";
const AllergyNameField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3ebee;
  color: #2d5f73;
  width: 146px;
  height: 26px;
  font-family: sans-serif;
  font-weight: bold;
`;

export default function AllergyName({ name }) {
  return <AllergyNameField name={name}>{name}</AllergyNameField>;
}
