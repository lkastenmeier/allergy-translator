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
    <NavigationItem active={true}>
      <MainLogoSmall />
      <span>Home</span>
    </NavigationItem>
  );
}
export function HomeNavigationItemInactive() {
  return (
    <NavigationItem active={false}>
      <MainLogoSmall />
      <span>Home</span>
    </NavigationItem>
  );
}
export function HelpNavigationItem() {
  return (
    <NavigationItem active={true}>
      <FindIcon />
      <span>Find Help</span>
    </NavigationItem>
  );
}
export function HelpNavigationItemInactive() {
  return (
    <NavigationItem active={false}>
      <FindIcon />
      <span>Find Help</span>
    </NavigationItem>
  );
}
export function InfoNavigationItem() {
  return (
    <NavigationItem active={true}>
      <InfoIcon />
      <span>Info</span>
    </NavigationItem>
  );
}
export function InfoNavigationItemInactive() {
  return (
    <NavigationItem active={false}>
      <InfoIcon />
      <span>Info</span>
    </NavigationItem>
  );
}
