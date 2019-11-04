import React, { useState, createRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Select from "../components/Select";
import WarningCard from "../components/WarningCard";
import Button from "../components/Button";
import NavButton from "../components/NavButton";
import ButtonContainer from "../components/ButtonContainer";
import DownloadIcon from "../icons/DownloadIcon";
import CardContainer from "../components/CardContainer";
import html2canvas from "html2canvas";

export default function CardPage({ allergies, match }) {
  const [languageFilterSelection, setLanguageFilterSelection] = useState(
    window.location.search.substr(6)
  );
  const history = useHistory();
  const allergy = match.params.name;
  const language = window.location.search.substr(6);
  const cardToPrint = createRef(null);

  function onFilterSelect(value) {
    setLanguageFilterSelection(value);
  }

  useEffect(() => {
    const newParams = new URLSearchParams();
    newParams.append("lang", `${languageFilterSelection}`);
    history.push(`${window.location.pathname}?${newParams.toString()}`);
  }, [history, languageFilterSelection]);

  return (
    <>
      {language && allergy && allergies && (
        <>
          <Select allergies={allergies} select={onFilterSelect} />
          <CardContainer ref={cardToPrint} key={allergy}>
            <WarningCard
              src={allergies[allergy].images.warning}
              alt={`no ${allergy}`}
              text={allergies[allergy].languages[language]}
            />
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
      )}
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
