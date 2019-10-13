import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Select from "../components/Select";
import Button from "../components/Button";
import Textfield from "../components/Textfield";
import styled from "styled-components";
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const allergies = [
  "milk",
  "eggs",
  "treenuts",
  "peanuts",
  "wheat",
  "shellfish",
  "fish",
  "soy"
];
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
export default function Home() {
  return (
    <body>
      <Header />
      <Navigation />
      <Select name="allergy">
        {allergies.map(allergy => (
          <option name={allergy} key={allergy}>
            {allergy}
          </option>
        ))}
      </Select>
      <Select name="language">
        {languages.map(language => (
          <option name={language} key={language}>
            {language}
          </option>
        ))}
      </Select>
      <Textfield placeholder="I am allergic to milk - to prevent a severe allergic reaction, please make sure my food does not contain any milk!" />
      <ButtonContainer>
        <Button>Submit</Button>
        <Button>Cancel</Button>
      </ButtonContainer>
    </body>
  );
}
