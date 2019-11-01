import React from "react";
import Navigation from "../components/Navigation";

export default {
  title: "Navigation"
};
export function Basic() {
  return <Navigation selected="3" />;
}
export function HomeSelected() {
  return <Navigation selected="0" />;
}
export function HelpSelected() {
  return <Navigation selected="1" />;
}
export function InfoSelected() {
  return <Navigation selected="2" />;
}
