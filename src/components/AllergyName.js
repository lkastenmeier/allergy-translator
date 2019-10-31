import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const AllergyNameField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.light};
  color: ${props => props.theme.text};
  width: 140px;
  height: 26px;
  font-weight: bold;
`;

export default function AllergyName({ children }) {
  return <AllergyNameField>{children}</AllergyNameField>;
}

AllergyName.propTypes = {
  children: PropTypes.node.isRequired
};
