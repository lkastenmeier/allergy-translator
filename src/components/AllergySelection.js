import React, { useState } from "react";
import styled from "styled-components";
import AllergyName from "../components/AllergyName";
import Picture from "./Picture";

const AllergySelectionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 146px;
  height: 137px;
`;

export default function AllergySelection({ src, alt, name }) {
  const [activeBox, setBox] = useState(false);
  return (
    <AllergySelectionBox
      onClick={() => setBox(true)}
      style={{
        border: activeBox ? " 3px solid #2D5F73" : "3px solid #e3ebee"
      }}
      name={name}
    >
      <Picture src={src} alt={alt} />
      <AllergyName name={name}>{name}</AllergyName>
    </AllergySelectionBox>
  );
}
