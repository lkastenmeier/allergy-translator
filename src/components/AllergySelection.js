import React, { useState } from "react";
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

export default function AllergySelection({ src, alt, name }) {
  const [allergySelection, setAllergySelection] = useState("");
  console.log(allergySelection);
  return (
    <AllergySelectionBox
      onClick={() => {
        setAllergySelection(name);
      }}
    >
      <Picture src={src} alt={alt} />
      <AllergyName name={name}>{name}</AllergyName>
    </AllergySelectionBox>
  );
}
