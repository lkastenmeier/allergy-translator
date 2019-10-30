import React from "react";
import styled from "styled-components";
const BasicButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
  align-items: center;
  border: 3px solid ${props => props.theme.light};
  background: transparent;
  height: 50px;
  width: 165px;
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.text};
  text-transform: uppercase;
`;

export default function Button({ name, children, onEvent }) {
  return (
    <BasicButton onClick={onEvent} name={name}>
      {children}
      {name}
    </BasicButton>
  );
}
