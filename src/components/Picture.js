import React from "react";
import styled from "styled-components";

const PictureBox = styled.img`
  background-color: white;
  height: 111px;
`;

export default function Picture({ src, alt }) {
  return <PictureBox src={src} alt={alt} />;
}
