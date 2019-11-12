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
import ConfirmationAnimation from "../components/ConfirmAnimation";

const Article = styled.article`
  display: flex;
  margin: 3px auto;
`;
const ButtonName = styled.span`
  margin-left: 15px;
`;
export default function CardPage({ allergies }) {
  const [startAnimation, setStartAnimation] = useState(false);

  const url = new URL(window.location.href);
  const language = url.searchParams.get("lang");
  const [languageFilterSelection, setLanguageFilterSelection] = useState(
    language
  );
  const history = useHistory();
  const allergy = url.searchParams.get("all");
  const cardToPrint = createRef(null);
  const cardURL = `/main/card/${window.location.search}`;
  const [storageButton, setStorageButton] = useState(checkStorage());

  function handleAddCard() {
    setCardsToStorage([allergy, languageFilterSelection, cardURL]);
  }

  function handleRemoveCard() {
    removeCardsFromStorage([allergy, languageFilterSelection, cardURL]);
  }

  function checkStorage() {
    if (getCardsFromStorage().find(parsedCard => parsedCard[2] === cardURL)) {
      return true;
    } else {
      return false;
    }
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

  useEffect(() => {
    const newParams = new URLSearchParams();
    newParams.append("lang", languageFilterSelection);
    history.push(
      `${window.location.pathname}?all=${allergy}&${newParams.toString()}`
    );
  }, [history, languageFilterSelection]);

  return (
    <>
      {languageFilterSelection && allergy && allergies && (
        <>
          <Select allergies={allergies} select={setLanguageFilterSelection} />
          <Article>
            <CardContainer ref={cardToPrint} key={allergy}>
              <WarningCard
                src={allergies[allergy].images.warning}
                alt={`no ${allergy}`}
                text={allergies[allergy].languages[languageFilterSelection]}
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
            {!storageButton && (
              <Button
                onEvent={() => {
                  handleAddCard();
                  setStorageButton(!storageButton);
                  setStartAnimation(true);
                  setTimeout(() => {
                    setStartAnimation(false);
                  }, 2000);
                }}
              >
                <MyCardIconLight />
                <ButtonName>save</ButtonName>
              </Button>
            )}
            {storageButton && (
              <Button
                onEvent={() => {
                  handleRemoveCard();
                  setStorageButton(!storageButton);
                  setStartAnimation(true);
                  setTimeout(() => {
                    setStartAnimation(false);
                  }, 2000);
                }}
              >
                <MyCardIconLight />
                <ButtonName>remove</ButtonName>
              </Button>
            )}
          </ButtonContainer>
          {startAnimation && <ConfirmationAnimation />}
        </>
      )}
    </>
  );
}
