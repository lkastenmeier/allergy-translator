import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AllergySelectionContainer from "../components/AllergySelectionContainer";
import AllergySelection from "../components/AllergySelection";
import H1 from "../components/H1";
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
export default function Home() {
  return (
    <body>
      <Header />
      <Navigation selected="0" />
      <H1 />
      <AllergySelectionContainer>
        {allergies.map(allergy => (
          <AllergySelection name={allergy} key={allergy} />
        ))}
      </AllergySelectionContainer>
    </body>
  );
}
