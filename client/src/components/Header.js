import React from "react";
import styled from "styled-components";
import MainLogoMedium from "../icons/MainLogoMedium";
import { Link } from "react-router-dom";

const AppHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 65px;
  padding: 5px;
  background-color: ${props => props.theme.medium};
`;
const HomeLink = styled(Link)`
  :hover {
    transform: scale(1.1);
  }
`;
export default function Header() {
  return (
    <AppHeader>
      <HomeLink to="/main">
        <MainLogoMedium />
      </HomeLink>
    </AppHeader>
  );
}
