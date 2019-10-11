import React from "react";
import AllergySelectionContainer from "../components/AllergySelectionContainer";
import AllergySelection from "../components/AllergySelection";

export default {
  title: "AllergySelectionContainer"
};
export function Example() {
  return (
    <AllergySelectionContainer>
      <AllergySelection />
      <AllergySelection />
      <AllergySelection />
      <AllergySelection />
      <AllergySelection />
      <AllergySelection />
      <AllergySelection />
    </AllergySelectionContainer>
  );
}
