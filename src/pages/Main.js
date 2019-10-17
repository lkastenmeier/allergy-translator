import React, { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AllergySelectionContainer from "../components/AllergySelectionContainer";
import AllergySelection from "../components/AllergySelection";
import { useHistory } from "react-router-dom";
import H1 from "../components/H1";
import { Switch, Route } from "react-router-dom";
import Select from "../components/Select";
import WarningCard from "../components/WarningCard";
import Button from "../components/Button";
import NavButton from "../components/NavButton";
import styled from "styled-components";
import DownloadIcon from "../icons/downloadIcon";
import { allergyData } from "../api/DummyData";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Main() {
  const history = useHistory();
  const [allergyFilterSelection, setAllergyFilterSelection] = useState("milk");
  const [languageFilterSelection, setLanguageFilterSelection] = useState(
    "english"
  );
  const imagesource = `/images/${allergyFilterSelection}Warning.svg`;

  function handleSelect(value) {
    setLanguageFilterSelection(value);
  }
  let allergy = allergyFilterSelection;
  let language = languageFilterSelection;
  let languages = "languages";
  return (
    <>
      <Header />
      <Navigation selected="0" />
      <Switch>
        <Route exact path="/main">
          <H1 name={"what is your dietary restriction?"} />
          <AllergySelectionContainer>
            {Object.entries(allergyData).map(([key, value]) => (
              <AllergySelection
                key={key}
                name={key}
                src={value.images.basic}
                handleAllergySelection={() => {
                  setAllergyFilterSelection(key);
                  history.push("/main/card");
                }}
              >
                {key}
              </AllergySelection>
            ))}
          </AllergySelectionContainer>
        </Route>
        <Route exact path="/Main/Card">
          <Select onSelect={handleSelect} />

          <WarningCard
            src={imagesource}
            alt={`no ${allergyFilterSelection}`}
            text={allergyData[allergy][languages][language]}
          />
          <ButtonContainer>
            <Button>
              <DownloadIcon />
              Download
            </Button>
            <NavButton path="/change" name="change" />
          </ButtonContainer>
        </Route>
      </Switch>
    </>
  );
}
