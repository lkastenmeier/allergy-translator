import React from "react";
import styled from "styled-components";
const WarningCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  align-items: center;
  border: 5px solid #f25260;
  background: white;
  height: 550px;
  width: 350px;
`;
const Image = styled.img`
  object-fit: cover;
  object-position: top center;
  width: 250px;
  height: 250px;
`;
const Paragraph = styled.p`
  font-size: 28px;
  color: #f25260;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
`;

export default function Picture({ src, alt, text }) {
  return (
    <WarningCardDiv src={src} alt={alt} text={text}>
      <Image className="warning-img" src={src} alt={alt} />
      <Paragraph>{text}</Paragraph>
    </WarningCardDiv>
  );
}
