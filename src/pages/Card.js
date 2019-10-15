import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Select from "../components/Select";
import WarningCard from "../components/WarningCard";
import Button from "../components/Button";
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
export default function Home() {
  return (
    <body>
      <Header />
      <Navigation />
      <Select name="language">
        {languages.map(language => (
          <option name={language} key={language}>
            {language}
          </option>
        ))}
      </Select>
      <WarningCard
        src="/images/milkWarning.svg"
        text="I am allergic to milk - to prevent a severe allergic reaction, please make sure my food does not contain any milk!"
        alt="no milk"
      />
      <ButtonContainer>
        <Button>
          <DownloadIcon />
          Download
        </Button>
        <Button>Change</Button>
      </ButtonContainer>
    </body>
  );
}
