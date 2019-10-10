import React from "react";
import AllergyName from "../components/AllergyName";

export default {
  title: "AllergyName"
};
export function Basic() {
  return (
    <AllergyName>
      <span>name</span>
    </AllergyName>
  );
}
export function Milk() {
  return (
    <AllergyName>
      <span>milk</span>
    </AllergyName>
  );
}
