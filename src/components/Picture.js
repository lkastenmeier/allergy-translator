import React from "react";
import styled from "styled-components";
const PictureBox = styled.img`
  border: 3px solid #e3ebee;
  object-fit: cover;
  object-position: top center;
  width: 146px;
  height: 111px;
`;

export default function Picture({ src, alt }) {
  return <PictureBox src={src} alt={alt} />;
}
