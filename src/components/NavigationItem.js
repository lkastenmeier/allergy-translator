import React from "react";
import styled from "styled-components";

const NavigationItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: transparent;
  border: ${props =>
    props.active ? "2px solid #BFCCDD" : "0px solid #BFCCDD"};
  outline: none;
  font-size: 16px;
  font-weight: bold;
  font-family: sans-serif;
  text-transform: uppercase;
  color: #2d5f73;
`;

export default function NavigationItem({ active, children }) {
  return <NavigationItemDiv active={active}>{children}</NavigationItemDiv>;
}
