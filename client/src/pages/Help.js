import React, { useState } from "react";
import Header from "../components/Header";
import Searchfield from "../components/Searchfield";
import Iframe from "../components/Iframe";
import styled, { css, keyframes } from "styled-components";
import MainLogo from "../icons/MainLogo";

const turner = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;
const LoadedContent = styled.section`
  ${props =>
    props.animation
      ? css`
          height: 100%;
        `
      : css`
          display: none;
        `};
`;
const Loading = styled.div`
  ${props =>
    props.animation
      ? css`
          display: none;
        `
      : css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: auto;
          animation: ${turner} 4s infinite linear;
        `};
`;

export default function Help() {
  const [animation, setAnimation] = useState(false);
  const [location, setlocation] = useState("");
  React.useEffect(() => {
    const timeout = () => setTimeout(() => setAnimation(true), 4000);
    timeout();
  }, []);
  function onLocationInput(value) {
    setlocation(value);
  }
  return (
    <>
      <Header selected={window.location.pathname} />
      <Loading animation={animation}>
        <MainLogo />
      </Loading>
      <LoadedContent animation={animation}>
        <Searchfield
          input={onLocationInput}
          placeholder="Enter your location"
        />
        <Iframe location={location} />
      </LoadedContent>
    </>
  );
}
