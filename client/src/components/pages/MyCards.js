//Display saved warning-cards from localStorage

//Dependencies
import React from "react";
import styled from "styled-components";

//Functions & Components
import Header from "../Header/Header";
import MyCardBox from "../MyCardBox/MyCardBox";
import { getCardFromStorage } from "../../api/storage";
import SelectionContainer from "../SelectionContainer/SelectionContainer";
import Title from "../Title/Title";
import MainLogo from "../icons/MainLogo";
import NavButton from "../buttons/NavButton/NavButton";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15% auto;
`;

export default function MyCard() {
  const mycards = getCardFromStorage();
  return (
    <>
      <Header selected={window.location.pathname} />
      {mycards.length >= 1 ? (
        <>
          <Title>Your Warning-Cards</Title>
          <SelectionContainer>
            {Object.entries(mycards).map(([key, value]) => (
              <MyCardBox
                key={value.url}
                path={value.url}
                allergy={value.allergy}
                language={value.language}
              />
            ))}
          </SelectionContainer>
        </>
      ) : (
        //alternative display if no cards are saved in localStorage
        <Container>
          <MainLogo />
          <Title>You Don't have any saved Warning-Cards</Title>
          <NavButton path="/main" name="Create a Warning-Card" />
        </Container>
      )}
    </>
  );
}
