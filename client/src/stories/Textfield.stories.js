import React from "react";
import Textfield from "../components/Textfield";
export default {
  title: "Textfield"
};
export function Empty() {
  return <Textfield placeholder="" />;
}
export function Text() {
  return <Textfield placeholder="I am allergic to milk - to prevent a severe allergic reaction, please make sure my food does not contain any milk!" />;
}