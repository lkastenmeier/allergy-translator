import React from "react";
import styled from "styled-components";

const NavigationItemBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  width: 90%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #e3ebee;
  border-style: "solid";
  border-width: 3px 1.5px 3px 1.5px;
  border-color: ${props => (props.active ? "transparent" : "#bfccdd")};
  font-size: 16px;
  font-weight: bold;
  font-family: sans-serif;
  text-transform: uppercase;
  color: #2d5f73;
`;

export default function NavigationItem({ active, children }) {
  return <NavigationItemBtn active={active}>{children}</NavigationItemBtn>;
}
