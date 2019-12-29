//selectiondisplays on StartPage

//Dependencise
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//Functions and Components
import AllergyName from "../AllergyName/AllergyName";
import Picture from "../Picture/Picture";

const StyledAllergySelection = styled.section`
  display: flex;
  flex-direction: column;
  width: 146px;
  height: 121px;
  border: 3px solid ${props => props.theme.light};
  margin: 7px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  @media (min-width: 800px) {
    width: 246px;
    height: 221px;
  }
`;

const AllergySelection = ({ onAllergySelect, src, name }) => {
  return (
    <StyledAllergySelection onClick={onAllergySelect}>
      <Picture src={src} alt={name} />
      <AllergyName>{name}</AllergyName>
    </StyledAllergySelection>
  );
};
export default AllergySelection;
AllergySelection.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onAllergySelect: PropTypes.func
};
