import React from "react";
import styled from "styled-components";
import AllergyName from "../components/AllergyName";
import Picture from "./Picture";

const AllergySelectionBox = styled.nav`
  display: flex;
  flex-direction: column;
  border: 3px solid #e3ebee;
  width: 146px;
  height: 137px;
`;

export default function AllergySelection({ src, alt, name }) {
  return (
    <AllergySelectionBox>
      <Picture src={src} alt={alt} />
      <AllergyName name={name}>{name}</AllergyName>
    </AllergySelectionBox>
  );
}
