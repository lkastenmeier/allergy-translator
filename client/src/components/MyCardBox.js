import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Picture from "../components/Picture";
import AllergyName from "../components/AllergyName";

const CardButton = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 146px;
  height: 137px;
  border: 3px solid ${props => props.theme.light};
  margin: 7px;
  text-decoration: none;
`;
export default function MyCardBox({ path, allergy, language }) {
  return (
    <CardButton to={path}>
      <Picture src={`/images/${allergy}Warning.svg`} alt={allergy} />
      <AllergyName>{language}</AllergyName>
    </CardButton>
  );
}

MyCardBox.propTypes = {
  path: PropTypes.string.isRequired
};
