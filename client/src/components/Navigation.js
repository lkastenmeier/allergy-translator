import NavigationItem from "../components/NavigationItem";
import React from "react";
import styled from "styled-components";
import { MyCardIconDark } from "../icons/MyCardIcon";
import FindIcon from "../icons/FindIcon";
import MainLogoSmall from "../icons/MainLogoSmall";
import PropTypes from "prop-types";

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  width: 100%;
  height: 60px;
  background-color: transparent;
`;

export default function Navigation({ selected }) {
  return (
    <NavigationBar>
      <NavigationItem path="/main" active={"/main" === selected}>
        <MainLogoSmall />
        <span>Home</span>
      </NavigationItem>

      <NavigationItem path="/help" active={"/help" === selected}>
        <FindIcon />
        <span>Find Help</span>
      </NavigationItem>

      <NavigationItem path="/mycards" active={"/mycards" === selected}>
        <MyCardIconDark />
        <span>Saved Cards</span>
      </NavigationItem>
    </NavigationBar>
  );
}

Navigation.propTypes = {
  selected: PropTypes.string.isRequired
};
