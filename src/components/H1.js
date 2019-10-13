import React from "react";
import styled from "styled-components";

const Headline = styled.h1`
  font-size: 19px;
  color: #2d5f73;
  padding: 5px;
  text-transform: uppercase;
  text-align: center;
`;

export default function H1() {
  return <Headline>What is your dietary restriction?</Headline>;
}
