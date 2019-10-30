import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import getAllergies from "../api/getAllergies";
import StartPage from "../pages/StartPage";
import CardPage from "../pages/CardPage";

export default function Main({ key }) {
  const [allergies, setAllergies] = useState(false);
  const [allergyFilterSelection, setAllergyFilterSelection] = useState("milk");
  const history = useHistory();

  useEffect(() => {
    getAllergies().then(fetchedAllergies => {
      setAllergies(fetchedAllergies);
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
            allergies={allergies}
            handleAllergySelection={handleAllergySelection}
          />
        </Route>
        <Route path="/main/card">
          <CardPage
            allergyFilterSelection={allergyFilterSelection}
            allergies={allergies}
          />
        </Route>
      </Switch>
    </>
  );
}
