import React from "react";
import styled from "styled-components";
import MainLogoMedium from "../icons/mainLogoMedium";
import { Link } from "react-router-dom";

const AppHeader = styled.header`
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
      <Link to="/main">
        <MainLogoMedium />
      </Link>
    </AppHeader>
  );
}
