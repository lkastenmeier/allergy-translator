import React from "react";
import styled from "styled-components";
import MainLogoMedium from "../icons/mainLogoMedium";
import { NavLink } from "react-router-dom";

const AppHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #bfccdd;
  height: 65px;
  padding: 5px;
`;

export default function Header(prop) {
  return (
    <AppHeader>
      <NavLink to="/main">
        <MainLogoMedium />
      </NavLink>
    </AppHeader>
  );
}
