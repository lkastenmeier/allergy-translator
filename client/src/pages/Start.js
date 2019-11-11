import React, { useState } from "react";
import StartScreen from "../components/StartScreen";
import { useHistory } from "react-router-dom";

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
