import React from "react";
import NavigationItem from "../components/NavigationItem";
import FindIcon from "../icons/findIcon";
import MainLogoSmall from "../icons/mainLogoSmall";
import InfoIcon from "../icons/infoIcon";

export default {
  title: "NavigationItem"
};
export function HomeNavigationItem() {
  return (
    <NavigationItem>
      <MainLogoSmall />
      <span>Home</span>
    </NavigationItem>
  );
}

export function HelpNavigationItem() {
  return (
    <NavigationItem>
      <FindIcon />
      <span>Find Help</span>
    </NavigationItem>
  );
}

export function InfoNavigationItem() {
  return (
    <NavigationItem>
      <InfoIcon />
      <span>Info</span>
    </NavigationItem>
  );
}
