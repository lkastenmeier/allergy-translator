import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AllergySelectionContainer from "../components/AllergySelectionContainer";
import AllergySelection from "../components/AllergySelection";
import H1 from "../components/H1";
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

export default function Home() {
  return (
    <>
      <Header />
      <Navigation selected="0" />
      <H1 />
      <AllergySelectionContainer>
        {Object.keys(allergies).map(key => (
          <AllergySelection key={key} name={key} src={allergies[key]}>
            {key}
          </AllergySelection>
        ))}
      </AllergySelectionContainer>
    </>
  );
}
