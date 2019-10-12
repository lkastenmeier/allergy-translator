import React from "react";
import styled, { keyframes } from "styled-components";
import MainLogo from "../icons/mainLogo";
const StartPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StartAnimation = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 170px;
  font-size: 30px;
  justify-content: space-evenly;
  margin: 30px;
  align-items: center;
  font-weight: bold;
`;
const AppearAnimation1 = keyframes`

  0% { opacity: 1; }
  50%   { opacity: 0; }
  100% { opacity: 1; }
`;

const Span = styled.span`
  animation: ${AppearAnimation1} 2s ease-in-out;
  animation-delay: ${props => props.delay};
`;

const style1 = {
  color: "#F25260"
};
const style2 = {
  color: "#2D5F73"
};
const style3 = {
  color: "#2D5F73"
};
const style4 = {
  color: "#F25260"
};

export default function StartScreen() {
  return (
    <StartPage>
      <MainLogo />
      <StartAnimation>
        <Span style={style1} delay=".5s">
          eat
        </Span>
        <Span style={style2} delay="1s">
          safe
        </Span>
        <br />
        <Span style={style3} delay="1.5s">
          travel
        </Span>
        <Span style={style4} delay="2s">
          much
        </Span>
      </StartAnimation>
    </StartPage>
  );
}
