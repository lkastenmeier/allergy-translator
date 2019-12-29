//Display map with preset searchparameter "hospitals" via google-maps-iframe

//Dependencies
import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

//Functions & Components
import Iframe from "../Iframe/Iframe";
import Header from "../Header/Header";
import Searchfield from "../Searchfield/Searchfield";
import MainLogo from "../icons/MainLogo";

//loadinganimation
const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

//render map after loadinganimation
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

//display loadinganimation before map
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
          animation: ${rotate} 4s infinite linear;
        `};
`;

const Help = () => {
  const [animation, setAnimation] = useState(false);
  const [location, setlocation] = useState("");

  React.useEffect(() => {
    //set timeout for loadinganimation
    const timeout = () => setTimeout(() => setAnimation(true), 2000);
    timeout();
  }, []);

  return (
    <>
      <Header selected={window.location.pathname} />
      <Loading animation={animation}>
        <MainLogo />
      </Loading>
      <LoadedContent animation={animation}>
        <Searchfield input={setlocation} placeholder="Enter your location" />
        <Iframe location={location} />
      </LoadedContent>
    </>
  );
};
export default Help;
