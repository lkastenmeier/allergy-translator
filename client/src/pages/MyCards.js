import React from "react";
import Header from "../components/Header";
import MyCardBox from "../components/MyCardBox";
import { getCardsFromStorage } from "../api/storage";
import SelectionContainer from "../components/SelectionContainer";
import Title from "../components/Title";

export default function MyCard() {
  const mycards = getCardsFromStorage();
  return (
    <>
      <Header selected={window.location.pathname} />
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
  );
}
