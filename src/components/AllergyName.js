import React from "react";
import styled from "styled-components";
const AllergyNameField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3ebee;
  color: #2d5f73;
  width: 140px;
  height: 26px;
  font-weight: bold;
`;

export default function AllergyName({ children }) {
  return <AllergyNameField>{children}</AllergyNameField>;
}
