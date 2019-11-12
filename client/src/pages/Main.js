import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import getAllergies from "../api/getAllergies";
import StartPage from "../pages/StartPage";
import CardPage from "../pages/CardPage";

export default function Main() {
  const [allergies, setAllergies] = useState(false);
  const [allergyFilterSelection, setAllergyFilterSelection] = useState("milk");
  const history = useHistory();

  useEffect(() => {
    getAllergies().then(fetchedAllergies => {
      setAllergies(fetchedAllergies);
    });
  }, []);

  function onAllergySelect(key) {
    setAllergyFilterSelection(key);
    const newParams = new URLSearchParams();
    newParams.append("all", allergyFilterSelection);
    history.push(`${window.location.pathname}?${newParams.toString()}`);
    history.push(`/main/card/?all=${key}&lang=english`);
  }

  return (
    <>
      <Header selected={window.location.pathname} />
      <Switch>
        <Route exact path="/main">
          <StartPage allergies={allergies} onAllergySelect={onAllergySelect} />
        </Route>
        <Route path="/main/card/">
          {props => (
            <CardPage
              {...props}
              allergyFilterSelection={allergyFilterSelection}
              allergies={allergies}
            />
          )}
        </Route>
      </Switch>
    </>
  );
}
