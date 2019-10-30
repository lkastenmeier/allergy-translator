import React, { useState } from "react";
import Select from "../components/Select";
import WarningCard from "../components/WarningCard";
import Button from "../components/Button";
import NavButton from "../components/NavButton";
import styled from "styled-components";
import DownloadIcon from "../icons/DownloadIcon";
import html2canvas from "html2canvas";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const CardContainer = styled.div`
  width: 90vw;
  margin: auto;
`;

export default function CardPage({ allergyData, allergyFilterSelection }) {
  const [languageFilterSelection, setLanguageFilterSelection] = useState(
    "english"
  );
  function handleSelect(value) {
    setLanguageFilterSelection(value);
  }
  const allergy = allergyFilterSelection;
  const language = languageFilterSelection;
  return (
    <>
      <Select allergyData={allergyData} select={handleSelect} />
      <CardContainer id="divToPrint" key={allergyFilterSelection}>
        {allergyFilterSelection && allergyData && languageFilterSelection && (
          <WarningCard
            src={allergyData[allergy].images.warning}
            alt={`no ${allergy}`}
            text={allergyData[allergy].languages[language]}
          />
        )}
      </CardContainer>
      <ButtonContainer>
        <Button
          onEvent={() => {
            html2canvas(document.querySelector("#divToPrint")).then(function(
              canvas
            ) {
              saveAs(
                canvas.toDataURL(),
                `${allergy}-warningcard-${language}.png`
              );
            });
          }}
        >
          <DownloadIcon />
          Download
        </Button>
        <NavButton path="/main" name="back" />
      </ButtonContainer>
    </>
  );
}
function saveAs(uri, filename) {
  const link = document.createElement("a");

  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
