import React from "react";
import styled from "styled-components";
import AllergyName from "../components/AllergyName";
import Picture from "./Picture";

const AllergySelectionBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 146px;
  height: 137px;
  border: 3px solid ${props => props.theme.light};
  margin: 7px;
`;

export default function AllergySelection({
  handleAllergySelection,
  src,
  name
}) {
  return (
    <AllergySelectionBox onClick={handleAllergySelection}>
      <Picture src={src} alt={name} />
      <AllergyName>{name}</AllergyName>
    </AllergySelectionBox>
  );
}
