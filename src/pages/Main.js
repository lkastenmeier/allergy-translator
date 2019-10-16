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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const languages = [
  "english",
  "german",
  "french",
  "spanish",
  "italian",
  "russian",
  "thai",
  "swedish"
];
const allergies = {
  milk: "/images/milk.svg",
  eggs: "/images/eggs.svg",
  treenuts: "/images/treenuts.svg",
  peanuts: "/images/peanuts.svg",
  wheat: "/images/wheat.svg",
  shellfish: "/images/shellfish.svg",
  fish: "/images/fish.svg",
  soy: "/images/soy.svg"
};

export default function Main() {
  const history = useHistory();
  const [allergyFilterSelection, setAllergyFilterSelection] = useState("");
  let imagesource = `/images/${allergyFilterSelection}Warning.svg`;
  return (
    <>
      <Header />
      <Navigation selected="0" />
      <Switch>
        <Route exact path="/main">
          <H1 name={"what is your dietary restriction?"} />
          <AllergySelectionContainer>
            {Object.keys(allergies).map(key => (
              <AllergySelection
                key={key}
                name={key}
                src={allergies[key]}
                onClick={() => {
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
          <Select name="language">
            {languages.map(language => (
              <option name={language} key={language}>
                {language}
              </option>
            ))}
          </Select>
          <WarningCard
            src={imagesource}
            text="चेतावनी मृत्युको खतरा: मैले दुग्ध पदार्थ अथवा यो भएको खाना एलर्जीका कारणले खान मिल्दैन। यदि खानामा रैछ भने एलर्जीले मरणाशन्न हुनेछु।"
            alt="no milk"
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
