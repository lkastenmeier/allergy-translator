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
const appearAnimation = keyframes`

  0% { opacity: 1; }
  50%   { opacity: 0; }
  100% { opacity: 1; }
`;

const SpanPrimary = styled.span`
  color: #f25260;
  animation: ${appearAnimation} 2s ease-in-out;
  animation-delay: ${props => props.delay};
`;
const SpanSecondary = styled.span`
  color: #2d5f73;
  animation: ${appearAnimation} 2s ease-in-out;
  animation-delay: ${props => props.delay};
`;

export default function StartScreen() {
  return (
    <StartPage>
      <MainLogo />
      <StartAnimation>
        <SpanPrimary delay=".5s">eat</SpanPrimary>
        <SpanSecondary delay="1s">safe</SpanSecondary>
        <br />
        <SpanSecondary delay="1.5s">travel</SpanSecondary>
        <SpanPrimary delay="2s">much</SpanPrimary>
      </StartAnimation>
    </StartPage>
  );
}
