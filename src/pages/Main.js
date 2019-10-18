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
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export default function Main() {
  const history = useHistory();
  const [allergyFilterSelection, setAllergyFilterSelection] = useState("milk");
  const [languageFilterSelection, setLanguageFilterSelection] = useState(
    "english"
  );
  function handleSelect(value) {
    setLanguageFilterSelection(value);
  }
  const allergy = allergyFilterSelection;
  const language = languageFilterSelection;

  function printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [830, 530]
      });
      pdf.addImage(imgData, "JPEG", -20, -10);
      pdf.save("warningcard.pdf");
    });
  }
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
          <Select select={handleSelect} />
          <CardContainer id="divToPrint" key={allergyFilterSelection}>
            <WarningCard
              src={allergyData[allergy].images.warning}
              alt={`no ${allergyFilterSelection}`}
              text={allergyData[allergy].languages[language]}
            />
          </CardContainer>
          <ButtonContainer>
            <Button
              onEvent={() => {
                printDocument();
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
