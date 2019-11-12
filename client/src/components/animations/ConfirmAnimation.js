//Animation for userfeedback on localStorage add/remove

//Dependencies
import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

//Functions & Components
import CheckIcon from "../icons/CheckIcon";

const alert = keyframes`
 0% {
      bottom: -20%;
    }
    40% {
      bottom: 30%;
    }
    50% {
      bottom: 30%;
    }
    60% {
      bottom: 30%;
    }
    100% {
      bottom: -20%;
    }
  }
`;

const StyledConfirmationAnimation = styled.div`
  box-shadow: 5px 5px 5px grey;
  background: ${props => props.theme.light};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 200px;
  bottom: -20%;
  left: 50%;
  border-radius: 5px;
  margin-left: -100px;
  border: 4px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  font-size: 22px;
  padding: 10px;
  animation: ${alert} 2s ease-in-out;
`;

export default function ConfirmationAnimation() {
  return (
    <StyledConfirmationAnimation>
      <CheckIcon />
    </StyledConfirmationAnimation>
  );
}
