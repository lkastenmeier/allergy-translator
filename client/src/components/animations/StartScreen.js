//Animation for splashscreen on app-start

//Dependencies
import React from "react";
import styled, { keyframes } from "styled-components";

//Functions & Components
import MainLogo from "../icons/MainLogo";

const radient = keyframes`
  0% {
    background: #BFCCDD;
  }

  25% {
    background: #E3EBEE;
  }

  50% {
    background: #BFCCDD;
  }
}`;

const StartPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 120px;
  animation: ${radient} 3.2s ease-in-out;
`;

const StyledAnimation = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px;
  width: 170px;
  font-size: 2rem;
  font-weight: bold;
`;
const appear = keyframes`

  0% { opacity: 1; }
  50%   { opacity: 0; }
  100% { opacity: 1; }
`;

const StyledPrimary = styled.span`
  color: ${props => props.theme.highlight};
  animation: ${appear} 2s ease-in-out;
  animation-delay: ${props => props.delay};
`;

const StyledSecondary = styled.span`
  color: ${props => props.theme.text};
  animation: ${appear} 1.5s ease-in-out;
  animation-delay: ${props => props.delay};
`;

const StyledName = styled.h1`
  text-align: center;
  margin-bottom: 80px;
  color: ${props => props.theme.highlight};
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 1px;
  font-family: "Comfortaa", cursive;
`;

const StartScreen = () => {
  return (
    <StartPage>
      <StyledName>Trallergy</StyledName>
      <MainLogo className="cuttlery" />
      <StyledAnimation>
        <StyledPrimary delay="0.4s">eat</StyledPrimary>
        <StyledSecondary delay="0.8s">safe</StyledSecondary>
        <br />
        <StyledSecondary delay="1.2s">travel</StyledSecondary>
        <StyledPrimary delay="1.6s">much</StyledPrimary>
      </StyledAnimation>
    </StartPage>
  );
};
export default StartScreen;
