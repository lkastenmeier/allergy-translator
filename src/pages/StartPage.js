import React from "react";
import AllergySelectionContainer from "../components/AllergySelectionContainer";
import AllergySelection from "../components/AllergySelection";
import Title from "../components/Title";

export default function StartPage({ allergies, onAllergySelect }) {
  return (
    <>
      <Title name={"what is your dietary restriction?"} />
      <AllergySelectionContainer>
        {Object.entries(allergies).map(([key, value]) => (
          <AllergySelection
            name={key}
            key={key}
            src={value.images.basic}
            onAllergySelect={() => onAllergySelect(key)}
          >
            {key}
          </AllergySelection>
        ))}
      </AllergySelectionContainer>
    </>
  );
}
