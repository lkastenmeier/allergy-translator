import React, { useState } from "react";
import styled from "styled-components";
const BasicButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
  align-items: center;
  border: 3px solid #e3ebee;
  background: transparent;
  height: 50px;
  width: 165px;
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
`;

export default function Button({ name, children }) {
  const [activeButton, setButton] = useState(false);
  return (
    <BasicButton
      onClick={() => setButton(true)}
      style={{ color: activeButton ? "#2D5F73" : "#e3ebee" }}
      name={name}
    >
      {children}
      {name}
    </BasicButton>
  );
}
