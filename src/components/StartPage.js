import React from "react";
import AllergySelectionContainer from "../components/AllergySelectionContainer";
import AllergySelection from "../components/AllergySelection";
import H1 from "../components/H1";

export default function StartPage({ allergyData, handleAllergySelection }) {
  return (
    <>
      <H1 name={"what is your dietary restriction?"} />
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
