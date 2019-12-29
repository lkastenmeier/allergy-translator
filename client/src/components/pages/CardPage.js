//Get warning-card, select language, download card, localStorage add/remove

//Dependencies
import React, { useState, createRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import html2canvas from "html2canvas";

//Functions & Components
import Select from "../Select/Select";
import WarningCard from "../WarningCard/WarningCard";
import Button from "../buttons/Button/Button";
import ButtonContainer from "../buttons/ButtonContainer/ButtonContainer";
import DownloadIcon from "../icons/DownloadIcon";
import CardContainer from "../CardContainer/CardContainer";
import { MyCardIconLight } from "../icons/MyCardIcon";
import ConfirmationAnimation from "../animations/ConfirmAnimation";
import {
  addCardToStorage,
  getCardFromStorage,
  removeCardFromStorage
} from "../../api/storage";

const Article = styled.article`
  display: flex;
  margin: 3px auto;
`;
const ButtonName = styled.span`
  margin-left: 15px;
`;
const CardPage = ({ allergies }) => {
  //Variables
  const history = useHistory();
  const cardToPrint = createRef(null);
  const cardURL = `/main/card/${window.location.search}`;
  const url = new URL(window.location.href);
  const allergy = url.searchParams.get("all");
  const language = url.searchParams.get("lang");
  const id = `${allergy}_${language}`;

  //States
  const [languageFilterSelection, setLanguageFilterSelection] = useState(
    language
  );
  const [startAnimation, setStartAnimation] = useState(false);
  const [storageButton, setStorageButton] = useState(checkStorage());

  //Functions
  const handleAddCard = () => {
    addCardToStorage({
      allergy: allergy,
      language: languageFilterSelection,
      url: cardURL,
      id: id
    });
  };

  const handleRemoveCard = () => {
    removeCardFromStorage(id);
  };

  function checkStorage() {
    //check if current card is already in localStorage and render save/remove-button accordingly
    if (getCardFromStorage().find(parsedCard => parsedCard.url === cardURL)) {
      return true;
    } else {
      return false;
    }
  }
  const handleButton = action => {
    //handle click of save/remove-button
    action();
    setStorageButton(!storageButton);
    setStartAnimation(true);
    setTimeout(() => {
      setStartAnimation(false);
    }, 2000);
  };

  const saveAs = (uri, filename) => {
    //save current warning-card from canvas as png
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
  };

  useEffect(() => {
    //add languageselection as searchparameter to url
    const newParams = new URLSearchParams();
    newParams.append("lang", languageFilterSelection);
    history.push(
      `${window.location.pathname}?all=${allergy}&${newParams.toString()}`
    );
  }, [history, languageFilterSelection, allergy]);

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
                //create canvas from warning-card via library html2canvas
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
                  handleButton(handleAddCard);
                }}
              >
                <MyCardIconLight />
                <ButtonName>save</ButtonName>
              </Button>
            )}
            {storageButton && (
              <Button
                onEvent={() => {
                  handleButton(handleRemoveCard);
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
};
export default CardPage;
