import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationButton = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  width: 165px;
  padding: 5px;
  background: ${props => props.theme.medium};
  color: ${props => props.theme.text};
  border: 3px solid ${props => props.theme.light};
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export default function NavButton({ path, name }) {
  return <NavigationButton to={path}>{name}</NavigationButton>;
}

NavButton.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
