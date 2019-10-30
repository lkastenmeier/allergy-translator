import React from "react";
import AllergySelectionContainer from "../components/AllergySelectionContainer";
import AllergySelection from "../components/AllergySelection";
import Title from "../components/Title";

export default function StartPage({ allergyData, handleAllergySelection }) {
  return (
    <>
      <Title name={"what is your dietary restriction?"} />
      <AllergySelectionContainer>
        {Object.entries(allergyData).map(([key, value]) => (
          <AllergySelection
            name={key}
            key={key}
            src={value.images.basic}
            handleAllergySelection={() => handleAllergySelection(key)}
          >
            {key}
          </AllergySelection>
        ))}
      </AllergySelectionContainer>
    </>
  );
}
