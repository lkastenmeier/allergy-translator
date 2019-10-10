import React from "react";
import styled from "styled-components";
const PictureBox = styled.img`
  object-fit: cover;
  object-position: top center;

  height: 111px;
`;

export default function Picture({ src, alt }) {
  return <PictureBox src={src} alt={alt} />;
}