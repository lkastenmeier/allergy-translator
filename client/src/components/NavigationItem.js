import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationButton = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  width: 90%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => props.theme.light};
  color: ${props => props.theme.text};
  border-width: 3px 1.5px 3px 1.5px;
  border-color: ${props => props.theme.medium};
  border-style: ${props => (props.active ? "none" : "solid")};
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;

export default function NavigationItem({ path, active, children }) {
  return (
    <NavigationButton to={path} active={active ? 1 : 0}>
      {children}
    </NavigationButton>
  );
}

NavigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
};
