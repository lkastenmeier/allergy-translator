import React, { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SearchField from "../components/SearchField";
import Iframe from "../components/Iframe";

export default function Help() {
  const [location, setlocation] = useState("");
  function onLocationInput(value) {
    setlocation(value);
  }
  return (
    <>
      <Header />
      <Navigation selected="1" />
      <SearchField input={onLocationInput} />
      <Iframe location={location} />
    </>
  );
}
