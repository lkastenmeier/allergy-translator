//Splashscreen with animation upon app-start

//Dependencies
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Functions & Components
import StartScreen from "../animations/StartScreen";

export default function StartAnimation() {
  const history = useHistory();

  const redirect = () => {
    history.push("/main");
  };

  const [animation, setAnimation] = useState(true);

  React.useEffect(() => {
    const timeout = () => setTimeout(() => setAnimation(false), 3200);
    timeout();
    return clearTimeout(timeout);
  }, []);

  return <>{animation ? <StartScreen /> : redirect()}</>;
}
