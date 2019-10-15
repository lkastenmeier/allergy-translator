import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AllergySelectionContainer from "../components/AllergySelectionContainer";
import AllergySelection from "../components/AllergySelection";
import H1 from "../components/H1";
const allergies = {
  milk: "../../public/warning-images/milk.svg",
  eggs: "../../public/warningImages/eggs.svg",
  treenuts: "/src/warning-images/treenuts.svg",
  peanuts: "src/warning-images/peanuts.svg",
  wheat: "public/warning-images/wheat.svg",
  shellfish: "src/warning-images/shellfish.svg",
  fish: "src/warning-images/fish.svg",
  soy: "src/warning-images/soy.svg"
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
