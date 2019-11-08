import React from "react";
import Header from "../components/Header";
import MyCardBox from "../components/MyCardBox";
import { getCardsFromStorage } from "../api/storage";
import SelectionContainer from "../components/SelectionContainer";
import Title from "../components/Title";
import MainLogo from "../icons/MainLogo";
import styled from "styled-components";
import NavButton from "../components/NavButton";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15% auto;
`;

export default function MyCard() {
  const mycards = getCardsFromStorage();
  return (
    <>
      <Header selected={window.location.pathname} />
      {mycards[0] && (
        <>
          <Title>Your Warning-Cards</Title>
          <SelectionContainer>
            {mycards.map(card => (
              <MyCardBox
                key={card[2]}
                path={card[2]}
                allergy={card[0]}
                language={card[1]}
              />
            ))}
          </SelectionContainer>
        </>
      )}
      {!mycards[0] && (
        <Container>
          <MainLogo />
          <Title>You Don't have any saved Warning-Cards</Title>
          <NavButton path="/main" name="Create a Warning-Card" />
        </Container>
      )}
    </>
  );
}
