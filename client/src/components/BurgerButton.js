import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Burger = styled.button`
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
  :focus {
    outline: none !important;
    outline-offset: none !important;
  }

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

export default function BurgerButton({ navigationDisplay, onToggle }) {
  return (
    <Burger onClick={onToggle} active={navigationDisplay}>
      <div />
      <div />
      <div />
    </Burger>
  );
}

BurgerButton.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool
};
