import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const NavigationButton = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
  align-items: center;
  border: 3px solid ${props => props.theme.light};
  background: transparent;
  height: 50px;
  width: 165px;
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.text};
  text-transform: uppercase;
  text-decoration: none;
`;
export default function NavButton({ path, name }) {
  return <NavigationButton to={path}>{name}</NavigationButton>;
}

NavButton.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
