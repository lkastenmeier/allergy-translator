import React from "react";
import styled from "styled-components";
import AllergyName from "../components/AllergyName";
import Picture from "./Picture";
import PropTypes from "prop-types";

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

export default function AllergySelection({ onAllergySelect, src, name }) {
  return (
    <StyledAllergySelection onClick={onAllergySelect}>
      <Picture src={src} alt={name} />
      <AllergyName>{name}</AllergyName>
    </StyledAllergySelection>
  );
}
AllergySelection.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onAllergySelect: PropTypes.func
};
