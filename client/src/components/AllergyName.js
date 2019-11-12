import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAllergyName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.light};
  color: ${props => props.theme.text};
  width: 100%;
  height: 20%;
  font-weight: bold;
  text-transform: lowercase;
`;

export default function AllergyName({ children }) {
  return <StyledAllergyName>{children}</StyledAllergyName>;
}

AllergyName.propTypes = {
  children: PropTypes.node.isRequired
};
