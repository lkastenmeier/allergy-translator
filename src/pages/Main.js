import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import getAllergies from "../api/getAllergies";
import StartPage from "../components/StartPage";
import CardPage from "../components/Card";

export default function Main({ key }) {
  const [allergyData, setAllergyData] = useState(false);
  const [allergyFilterSelection, setAllergyFilterSelection] = useState("milk");
  const history = useHistory();

  useEffect(() => {
    getAllergies().then(fetchedAllergies => {
      setAllergyData(fetchedAllergies);
    });
  }, []);
  function handleAllergySelection(key) {
    setAllergyFilterSelection(key);
    history.push("/main/card");
  }

  return (
    <>
      <Header />
      <Navigation selected="0" />
      <Switch>
        <Route exact path="/main">
          <StartPage
            allergyData={allergyData}
            key={key}
            handleAllergySelection={handleAllergySelection}
          />
        </Route>
        <Route exact path="/main/card">
          <CardPage
            allergyFilterSelection={allergyFilterSelection}
            allergyData={allergyData}
          />
        </Route>
      </Switch>
    </>
  );
}
