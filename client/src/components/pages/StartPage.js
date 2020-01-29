//Homepage for allergyselection and redirect to CardPage upon allergyselect

//Dependencies
import React from "react";
import PropTypes from "prop-types";

//Functions & Components
import SelectionContainer from "../SelectionContainer";
import AllergySelection from "../AllergySelection";
import Title from "../Title";

const StartPage = ({ allergies, onAllergySelect }) => {
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
};
export default StartPage;

StartPage.propTypes = {
  onAllergySelect: PropTypes.func
};
