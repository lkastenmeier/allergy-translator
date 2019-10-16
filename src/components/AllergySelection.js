import React from "react";
import styled from "styled-components";
import AllergyName from "../components/AllergyName";
import Picture from "./Picture";

const AllergySelectionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 146px;
  height: 137px;
  border: 3px solid #e3ebee;
  margin: 10px;
`;

export default function AllergySelection({ onClick, src, alt, name }) {
  return (
    <AllergySelectionBox onClick={onClick}>
      <Picture src={src} alt={alt} />
      <AllergyName name={name}>{name}</AllergyName>
    </AllergySelectionBox>
  );
}
