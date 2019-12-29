//Togglebutton to open/close the navigation

//Dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBurgerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 4rem;
  height: 1.7rem;
  background: transparent;
  cursor: pointer;
  padding: 0;
  border: none;

  div {
    width: 1.9rem;
    height: 0.2rem;
    background: ${props => props.theme.light};
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ active }) => (active ? "rotate(40deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ active }) => (active ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ active }) => (active ? "rotate(-40deg)" : "rotate(0)")};
    }
  }
`;

const BurgerButton = ({ active, onToggle }) => {
  return (
    <StyledBurgerButton onClick={onToggle} active={active}>
      <div />
      <div />
      <div />
    </StyledBurgerButton>
  );
};
export default BurgerButton;

BurgerButton.propTypes = {
  onToggle: PropTypes.func,
  active: PropTypes.bool
};
