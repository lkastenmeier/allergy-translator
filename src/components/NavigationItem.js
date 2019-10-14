import React from "react";
import styled from "styled-components";

const NavigationItemBtn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  width: 90%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => (props.active ? "transparent" : "#e3ebee")};
  border-width: 3px 1.5px 3px 1.5px;
  border-color: #bfccdd;
  border-style: ${props => (props.active ? "none" : "solid")};
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: #2d5f73;
`;

export default function NavigationItem({ active, children }) {
  return <NavigationItemBtn active={active}>{children}</NavigationItemBtn>;
}
