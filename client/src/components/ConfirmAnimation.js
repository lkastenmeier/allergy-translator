import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { MyCardIconDark } from "../icons/MyCardIcon";
import Title from "../components/Title";

export const alert = keyframes`
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

const MessageBox = styled.div`
  box-shadow: 5px 5px 5px grey;
  background: ${props => props.theme.light};
  display: flex;
  flex-direction: column;
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
    <MessageBox>
      <MyCardIconDark />
      <Title>DONE</Title>
    </MessageBox>
  );
}
