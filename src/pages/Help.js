import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import H1 from "../components/H1";

export default function Home() {
  return (
    <body>
      <Header />
      <Navigation selected="1" />
      <H1 name="Here will be a map and an emergency number" />
    </body>
  );
}
