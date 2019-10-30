import React, { useState } from "react";
import StartScreen from "../components/StartScreen";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const [toMain, setToMain] = useState(false);
  setTimeout(() => setToMain(true), 3200);

  return <>{toMain ? history.push("/main") : <StartScreen />}</>;
}
