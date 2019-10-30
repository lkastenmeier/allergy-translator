import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Title from "../components/Title";

export default function Home() {
  return (
    <body>
      <Header />
      <Navigation selected="1" />
      <Title name="Here will be a map and an emergency number" />
    </body>
  );
}
