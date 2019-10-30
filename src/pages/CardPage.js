import React, { useState, createRef } from "react";
import Select from "../components/Select";
import WarningCard from "../components/WarningCard";
import Button from "../components/Button";
import NavButton from "../components/NavButton";
import ButtonContainer from "../components/ButtonContainer";
import DownloadIcon from "../icons/DownloadIcon";
import CardContainer from "../components/CardContainer";
import html2canvas from "html2canvas";

export default function CardPage({ allergies, allergyFilterSelection }) {
  const [languageFilterSelection, setLanguageFilterSelection] = useState(
    "english"
  );
  function handleSelect(value) {
    setLanguageFilterSelection(value);
  }
  const allergy = allergyFilterSelection;
  const language = languageFilterSelection;
  const cardToPrint = createRef(null);
  return (
    <>
      <Select allergies={allergies} select={handleSelect} />
      <CardContainer ref={cardToPrint} key={allergyFilterSelection}>
        {allergyFilterSelection && allergies && languageFilterSelection && (
          <WarningCard
            src={allergies[allergy].images.warning}
            alt={`no ${allergy}`}
            text={allergies[allergy].languages[language]}
          />
        )}
      </CardContainer>
      <ButtonContainer>
        <Button
          onEvent={() => {
            html2canvas(cardToPrint.current).then(function(canvas) {
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
