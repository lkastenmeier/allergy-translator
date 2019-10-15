import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import H1 from "../components/H1";

export default function Home() {
  return (
    <body>
      <Header />
      <Navigation selected="2" />
      <H1 name="Here will be some Info such as FAQ, Instructions and Impressum" />
    </body>
  );
}
