import React, { useState } from "react";
import StartScreen from "../components/StartScreen";
import { Redirect } from "react-router-dom";

export default function Home() {
  const [toMain, setToMain] = useState(false);
  setTimeout(() => setToMain(true), 4500);
  return (
    <>
      {toMain ? (
        <Redirect to="/main" />
      ) : (
        <body>
          <StartScreen />
        </body>
      )}
    </>
  );
}
