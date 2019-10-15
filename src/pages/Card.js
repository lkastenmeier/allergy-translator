import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
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
export default function Home() {
  return (
    <>
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
    </>
  );
}
