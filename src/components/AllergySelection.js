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

export default function AllergySelection({
  handleAllergySelection,
  src,
  name
}) {
  return (
    <AllergySelectionBox onClick={handleAllergySelection}>
      <Picture src={src} />
      <AllergyName name={name}>{name}</AllergyName>
    </AllergySelectionBox>
  );
}
