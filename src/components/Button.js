import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BasicButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  width: 165px;
  padding: 5px;
  color: ${props => props.theme.text};
  border: 3px solid ${props => props.theme.light};
  background: ${props => props.theme.medium};
  font-size: 16px;
  font-weight: bold;

  text-transform: uppercase;
`;

export default function Button({ name, children, onEvent }) {
  return <BasicButton onClick={onEvent}>{children}</BasicButton>;
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};
