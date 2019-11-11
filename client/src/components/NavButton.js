import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const StyledNavButton = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 5px;
  background: ${props => props.theme.medium};
  color: ${props => props.theme.text};
  border: 3px solid ${props => props.theme.light};
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  :hover {
    transform: scale(1.1);
  }
  :focus {
    border: 4px solid ${props => props.theme.text};
    outline: none !important;
    outline-offset: none !important;
  }
  @media (max-width: 330px) {
    width: 150px;
  }
  @media (min-width: 400px) {
    width: 350px;
  }
  @media (min-width: 500px) {
    width: 450px;
  }
  @media (min-width: 600px) {
    width: 270px;
  }
`;

export default function NavButton({ path, name }) {
  return <StyledNavButton to={path}>{name}</StyledNavButton>;
}

NavButton.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
