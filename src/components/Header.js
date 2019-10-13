import React from "react";
import styled from "styled-components";
import MainLogoMedium from "../icons/mainLogoMedium";
import BurgerIcon from "../icons/BurgerIcon";

const AppHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #bfccdd;
  height: 60px;
  padding: 5px;
`;

export default function Header(props) {
  return (
    <AppHeader {...props}>
      <span></span>
      <span></span>
      <MainLogoMedium />
      <BurgerIcon />
    </AppHeader>
  );
}
