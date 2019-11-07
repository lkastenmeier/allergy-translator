import React, { useState } from "react";
import Header from "../components/Header";
import Searchfield from "../components/Searchfield";
import Iframe from "../components/Iframe";

export default function Help() {
  const [location, setlocation] = useState("");
  function onLocationInput(value) {
    setlocation(value);
  }
  return (
    <>
      <Header selected={window.location.pathname} />
      <Searchfield input={onLocationInput} placeholder="Enter your location" />
      <Iframe location={location} />
    </>
  );
}
