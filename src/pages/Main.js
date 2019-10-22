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
import html2canvas from "html2canvas";

async function getAllergies() {
  const promise = await fetch("http://localhost:3000/allergies").then(
    response => response.json()
  );
  return promise;
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CardContainer = styled.div`
  width: 90vw;
  margin: auto;
`;

export default function Main() {
  const [allergyFilterSelection, setAllergyFilterSelection] = useState("milk");
  const [languageFilterSelection, setLanguageFilterSelection] = useState(
    "english"
  );
  const [allergyData, setAllergyData] = React.useState(false);
  React.useEffect(() => {
    getAllergies().then(fetchedAllergies => {
      setAllergyData(fetchedAllergies);
    });
  }, []);

  const history = useHistory();

  function handleSelect(value) {
    setLanguageFilterSelection(value);
  }
  const allergy = allergyFilterSelection;
  const language = languageFilterSelection;

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
          <Select allergyData={allergyData} select={handleSelect} />
          <CardContainer id="divToPrint" key={allergyFilterSelection}>
            {allergyFilterSelection &&
              allergyData &&
              languageFilterSelection && (
                <WarningCard
                  src={allergyData[allergy].images.warning}
                  alt={`no ${allergy}`}
                  text={allergyData[allergy].languages[language]}
                />
              )}
          </CardContainer>
          <ButtonContainer>
            <Button
              id="download"
              onEvent={() => {
                html2canvas(document.querySelector("#divToPrint")).then(
                  function(canvas) {
                    console.log(canvas);
                    saveAs(canvas.toDataURL(), "file-name.png");
                  }
                );
              }}
            >
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
function saveAs(uri, filename) {
  const link = document.createElement("a");

  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
