import NavigationItem from "../components/NavigationItem";
import React from "react";
import styled from "styled-components";
import InfoIcon from "../icons/InfoIcon";
import FindIcon from "../icons/FindIcon";
import MainLogoSmall from "../icons/MainLogoSmall";

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: stretch;
  background-color: transparent;
`;

export default function Navigation({ selected }) {
  return (
    <NavigationBar>
      <NavigationItem path="/main" active={"0" === selected}>
        <MainLogoSmall />
        <span>Home</span>
      </NavigationItem>

      <NavigationItem path="/help" active={"1" === selected}>
        <FindIcon />
        <span>Find Help</span>
      </NavigationItem>

      <NavigationItem path="/info" active={"2" === selected}>
        <InfoIcon />
        <span>Info</span>
      </NavigationItem>
    </NavigationBar>
  );
}
