import React from "react";
import styled from "styled-components";
import MainLogoMedium from "../icons/MainLogoMedium";
import { Link } from "react-router-dom";

const AppHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 65px;
  padding: 5px;
  background-color: ${props => props.theme.medium};
`;

export default function Header() {
  return (
    <AppHeader>
      <Link to="/main">
        <MainLogoMedium />
      </Link>
    </AppHeader>
  );
}
