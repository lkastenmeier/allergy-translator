import React from "react";
import SelectionContainer from "../components/SelectionContainer";
import AllergySelection from "../components/AllergySelection";
import Title from "../components/Title";

export default function StartPage({ allergies, onAllergySelect }) {
  return (
    <>
      <Title>what is your dietary restriction?</Title>
      <SelectionContainer>
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
      </SelectionContainer>
    </>
  );
}
