import React from "react";
import styled from "styled-components";
const WarningCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  align-items: center;
  border: 5px solid #f25260;
  background: white;
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #f25260;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
`;

export default function Picture({ src, alt, text }) {
  return (
    <WarningCardDiv>
      <Image src={src} alt={alt} />
      <Paragraph>{text}</Paragraph>
    </WarningCardDiv>
  );
}
