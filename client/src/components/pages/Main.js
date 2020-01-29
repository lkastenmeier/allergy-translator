//Handle states, functions and routes between StartPage and CardPage

//Dependencies
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

//Functions & Components
import Header from "../Header";
import fetchAllergies from "../../api/fetchAllergies";
import StartPage from "../pages/StartPage";
import CardPage from "../pages/CardPage";

const Main = () => {
  const [allergies, setAllergies] = useState(false);
  const [allergyFilterSelection, setAllergyFilterSelection] = useState("milk");
  const history = useHistory(); //dom-method to change route

  useEffect(() => {
    //get and save allergydata in state allergies
    fetchAllergies().then(fetchedAllergies => {
      setAllergies(fetchedAllergies);
    });
  }, []);

  const onAllergySelect = key => {
    //save allergyselection as searchparameter in url and redirect to CardPage
    setAllergyFilterSelection(key);
    const newParams = new URLSearchParams();
    newParams.append("all", allergyFilterSelection);
    history.push(`${window.location.pathname}?${newParams.toString()}`);
    history.push(`/main/card/?all=${key}&lang=english`);
  };

  return (
    <>
      <Header selected={window.location.pathname} />
      <Switch>
        <Route exact path="/main">
          <StartPage allergies={allergies} onAllergySelect={onAllergySelect} />
        </Route>
        <Route path="/main/card/">
          <CardPage
            allergyFilterSelection={allergyFilterSelection}
            allergies={allergies}
          />
        </Route>
      </Switch>
    </>
  );
};
export default Main;
