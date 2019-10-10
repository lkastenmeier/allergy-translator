import NavigationItem from "../components/NavigationItem";
import React from "react";
import styled from "styled-components";
import InfoIcon from "../icons/infoIcon";
import FindIcon from "../icons/findIcon";
import MainLogoSmall from "../icons/mainLogoSmall";
// import {
//   HomeNavigationItem,
//   HelpNavigationItem,
//   InfoNavigationItem
// } from "../stories/NavigationItem.stories";

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  position: sticky;
  align-items: center;
  justify-content: stretch;
  background-color: transparent;
`;

export default function Navigation({ selected }) {
  return (
    <NavigationBar>
      <NavigationItem active={"0" === selected}>
        <MainLogoSmall />
        <span>Home</span>
      </NavigationItem>
      <NavigationItem active={"1" === selected}>
        <FindIcon />
        <span>Find Help</span>
      </NavigationItem>
      <NavigationItem active={"2" === selected}>
        <InfoIcon />
        <span>Info</span>
      </NavigationItem>
    </NavigationBar>
  );
}
