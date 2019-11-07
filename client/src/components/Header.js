import React, { useState } from "react";
import styled, { css } from "styled-components";
import MainLogoMedium from "../icons/MainLogoMedium";
import { Link } from "react-router-dom";
import NavigationItem from "../components/NavigationItem";
import { MyCardIconDark } from "../icons/MyCardIcon";
import FindIcon from "../icons/FindIcon";
import MainLogoSmall from "../icons/MainLogoSmall";
import BurgerIcon from "../icons/BurgerIcon";

const AppHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 65px;
  padding: 5px;
  background-color: ${props => props.theme.medium};
`;
const HomeLink = styled(Link)`
  position: absolute;
  left: 50%;
  :hover {
    transform: scale(1.1);
  }
`;
const NavigationBar = styled.nav`
  ${props =>
    props.navigationDisplay
      ? css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: stretch;
          width: 100%;
          height: 60px;
          background-color: transparent;
        `
      : css`
          display: none;
        `};
`;
const BurgerButton = styled.button`
  transition: transform 0.2s ease-in-out;
  transform: ${({ navigationDisplay }) =>
    navigationDisplay ? "rotate(-90deg)" : "rotate(0)"};
  margin-right: 20px;
  background: transparent;
  border: none;
  outline: none;
`;

const NavName = styled.span`
  margin-left: 15px;
`;
export default function Header({ selected }) {
  function toggleNav() {
    setNavigationDisplay(!navigationDisplay);
  }
  const [navigationDisplay, setNavigationDisplay] = useState(true);
  return (
    <>
      <AppHeader>
        <HomeLink to="/main">
          <MainLogoMedium />
        </HomeLink>
        <BurgerButton
          navigationDisplay={navigationDisplay}
          onClick={() => toggleNav()}
        >
          <BurgerIcon />
        </BurgerButton>
      </AppHeader>
      <NavigationBar navigationDisplay={navigationDisplay}>
        <NavigationItem path="/main" active={"/main" === selected}>
          <MainLogoSmall />
          <NavName>Home</NavName>
        </NavigationItem>

        <NavigationItem path="/help" active={"/help" === selected}>
          <FindIcon />
          <NavName>Help</NavName>
        </NavigationItem>

        <NavigationItem path="/mycards" active={"/mycards" === selected}>
          <MyCardIconDark />
          <NavName>Saved</NavName>
        </NavigationItem>
      </NavigationBar>
    </>
  );
}
