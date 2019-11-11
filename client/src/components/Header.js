import React, { useState } from "react";
import styled, { css } from "styled-components";
import MainLogoMedium from "../icons/MainLogoMedium";
import { Link } from "react-router-dom";
import NavigationItem from "../components/NavigationItem";
import { MyCardIconDark } from "../icons/MyCardIcon";
import FindIcon from "../icons/FindIcon";
import MainLogoSmall from "../icons/MainLogoSmall";
import BurgerButton from "../components/BurgerButton";
import PropTypes from "prop-types";

const StyledAppHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 65px;
  padding: 5px;
  background-color: ${props => props.theme.medium};
`;
const StyledHomeLink = styled(Link)`
  position: absolute;
  left: 50%;
  :hover {
    transform: scale(1.1);
  }
  :focus {
    outline: none !important;
    outline-offset: none !important;
  }
`;
const StyledNavBar = styled.nav`
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

const NavName = styled.span`
  margin-left: 15px;
`;
export default function Header({ selected, children }) {
  function toggleNav() {
    setNavigationDisplay(!navigationDisplay);
  }
  const [navigationDisplay, setNavigationDisplay] = useState(true);

  return (
    <>
      <StyledAppHeader>
        <StyledHomeLink to="/main">
          <MainLogoMedium />
        </StyledHomeLink>
        <BurgerButton active={navigationDisplay} onToggle={() => toggleNav()}>
          {children}
        </BurgerButton>
      </StyledAppHeader>
      <StyledNavBar navigationDisplay={navigationDisplay}>
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
      </StyledNavBar>
    </>
  );
}
Header.propTypes = {
  selected: PropTypes.string,
  children: PropTypes.node
};
