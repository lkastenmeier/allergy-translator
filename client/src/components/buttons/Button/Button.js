//Basic buttons for multipurpose use

//Dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 165px;
  padding: 5px;
  margin: 5px;
  color: ${props => props.theme.text};
  border: 3px solid ${props => props.theme.light};
  background: ${props => props.theme.medium};
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  :focus {
    border: 4px solid ${props => props.theme.text};
  }
  @media (max-width: 330px) {
    width: 150px;
  }
  @media (min-width: 420px) {
    width: 350px;
    height: 100px;
  }
  @media (min-width: 500px) {
    width: 450px;
    height: 100px;
  }
  @media (min-width: 600px) {
    width: 270px;
    height: 100px;
  }
`;

export default function Button({ children, onEvent }) {
  return <StyledButton onClick={onEvent}>{children}</StyledButton>;
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onEvent: PropTypes.func
};
