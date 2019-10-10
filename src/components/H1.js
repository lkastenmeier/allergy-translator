import React from "react";
import styled from "styled-components";

const Headline = styled.h1`
  font-size: 20px;
  color: #2d5f73;
  padding: 4px 15px;
  font-family: sans-serif;
  text-transform: uppercase;
`;

export function H1(props) {
  return <Headline {...props}>What is your dietary restriction?</Headline>;
}
