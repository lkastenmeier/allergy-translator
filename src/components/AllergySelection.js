import React from "react";
import styled from "styled-components";
import AllergyName from "../components/AllergyName";
import Picture from "./Picture";
import PropTypes from "prop-types";

const AllergySelectionBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 146px;
  height: 137px;
  border: 3px solid ${props => props.theme.light};
  margin: 7px;
`;

export default function AllergySelection({ onAllergySelect, src, name }) {
  return (
    <AllergySelectionBox onClick={onAllergySelect}>
      <Picture src={src} alt={name} />
      <AllergyName>{name}</AllergyName>
    </AllergySelectionBox>
  );
}
AllergySelection.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
