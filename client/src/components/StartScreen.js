import React from "react";
import styled, { keyframes } from "styled-components";
import MainLogo from "../icons/MainLogo";

const StartPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: 120px;
`;

const StartAnimation = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px;
  width: 170px;
  font-size: 2rem;
  font-weight: bold;
`;
const appearAnimation = keyframes`

  0% { opacity: 1; }
  50%   { opacity: 0; }
  100% { opacity: 1; }
`;

const SpanPrimary = styled.span`
  color: ${props => props.theme.highlight};
  animation: ${appearAnimation} 2s ease-in-out;
  animation-delay: ${props => props.delay};
`;

const SpanSecondary = styled.span`
  color: ${props => props.theme.text};
  animation: ${appearAnimation} 1.5s ease-in-out;
  animation-delay: ${props => props.delay};
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 80px;
  color: ${props => props.theme.highlight};
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 1px;
  font-family: "Comfortaa", cursive;
`;

export default function StartScreen() {
  return (
    <StartPage>
      <Title>Trallergy</Title>
      <MainLogo className="cuttlery" />
      <StartAnimation>
        <SpanPrimary delay="0.4s">eat</SpanPrimary>
        <SpanSecondary delay="0.8s">safe</SpanSecondary>
        <br />
        <SpanSecondary delay="1.2s">travel</SpanSecondary>
        <SpanPrimary delay="1.6s">much</SpanPrimary>
      </StartAnimation>
    </StartPage>
  );
}
