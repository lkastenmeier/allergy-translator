import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Title from "../components/Title";

export default function Help() {
  return (
    <>
      <Header />
      <Navigation selected="help" />
      <Title name="Here will be a map and an emergency number" />
    </>
  );
}
