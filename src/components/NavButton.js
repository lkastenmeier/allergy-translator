import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavigationButton = styled(NavLink)`
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
  color: #2d5f73;
  text-transform: uppercase;
  text-decoration: none;
`;
export default function NavButton({ path, name }) {
  return (
    <NavigationButton to={path} name={name}>
      {name}
    </NavigationButton>
  );
}
