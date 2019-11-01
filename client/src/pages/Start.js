import React, { useState } from "react";
import StartScreen from "../components/StartScreen";
import { useHistory } from "react-router-dom";

export default function StartAnimation() {
  const history = useHistory();
  const [toMain, setToMain] = useState(false);
  React.useEffect(() => {
    const timeout = () => setTimeout(() => setToMain(true), 3100);
    timeout();
    return clearTimeout(timeout);
  }, []);
  return <>{toMain ? history.push("/main") : <StartScreen />}</>;
}
