import React from "react";
import AllergySelectionContainer from "../components/AllergySelectionContainer/AllergySelectionContainer";
import AllergySelection from "../components/AllergySelection/AllergySelection";

export default {
  title: "AllergySelectionContainer"
};
export function Example() {
  const allergies = [
    "milk",
    "eggs",
    "treenuts",
    "peanuts",
    "wheat",
    "shellfish",
    "fish",
    "soy"
  ];
  return (
    <AllergySelectionContainer>
      {allergies.map(allergy => (
        <AllergySelection name={allergy} key={allergy} />
      ))}
    </AllergySelectionContainer>
  );
}
