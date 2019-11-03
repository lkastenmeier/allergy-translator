import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Title from "../components/Title";

export default function Info() {
  return (
    <>
      <Header />
      <Navigation selected={window.location.pathname} />
      <Title name="Here will be some Info such as FAQ, Instructions and Impressum" />
    </>
  );
}
