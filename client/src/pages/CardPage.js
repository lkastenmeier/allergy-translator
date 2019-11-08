import React, { useState, createRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Select from "../components/Select";
import WarningCard from "../components/WarningCard";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import styled from "styled-components";
import DownloadIcon from "../icons/DownloadIcon";
import CardContainer from "../components/CardContainer";
import html2canvas from "html2canvas";
import {
  setCardsToStorage,
  getCardsFromStorage,
  removeCardsFromStorage
} from "../api/storage";
import { MyCardIconLight } from "../icons/MyCardIcon";

const Article = styled.article`
  display: flex;
  margin: 3px auto;
`;
const ButtonName = styled.span`
  margin-left: 15px;
`;
export default function CardPage({ allergies, match }) {
  const [languageFilterSelection, setLanguageFilterSelection] = useState(
    window.location.search.substr(6)
  );
  const history = useHistory();
  const allergy = match.params.name;
  const language = window.location.search.substr(6);
  const cardToPrint = createRef(null);
  const cardURL = `/main/card/${allergy}${window.location.search}`;

  function onFilterSelect(value) {
    setLanguageFilterSelection(value);
  }
  function handleAddCard() {
    setCardsToStorage([allergy, language, cardURL]);
  }
  function handleRemoveCard() {
    removeCardsFromStorage([allergy, language, cardURL]);
  }
  function checkStorage() {
    if (!getCardsFromStorage().find(parsedCard => parsedCard[2] === cardURL)) {
      return true;
    }
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
          <Article>
            <CardContainer ref={cardToPrint} key={allergy}>
              <WarningCard
                src={allergies[allergy].images.warning}
                alt={`no ${allergy}`}
                text={allergies[allergy].languages[language]}
              />
            </CardContainer>
          </Article>
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
              <ButtonName>Download</ButtonName>
            </Button>
            {checkStorage() && (
              <Button
                onEvent={() => {
                  handleAddCard();
                }}
              >
                <MyCardIconLight />
                <ButtonName>save</ButtonName>
              </Button>
            )}
            {!checkStorage() && (
              <Button
                onEvent={() => {
                  handleRemoveCard();
                }}
              >
                <MyCardIconLight />
                <ButtonName>remove</ButtonName>
              </Button>
            )}
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
