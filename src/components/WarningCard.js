import React from "react";
import styled from "styled-components";
const WarningCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
  align-items: center;
  border: 5px solid #f25260;
  background: white;
  height: 550px;
  width: 350px;
  margin: 10px;
`;
const Paragraph = styled.p`
  font-size: 28px;
  color: #f25260;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
`;

export default function Picture({ children, text }) {
  return (
    <WarningCardDiv>
      {children}
      <Paragraph>{text}</Paragraph>
    </WarningCardDiv>
  );
}
