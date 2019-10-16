import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Card from "./pages/Card";
import Help from "./pages/Help";
import Change from "./pages/Change";
import Info from "./pages/Info";
import Start from "./pages/Start";
import Main from "./pages/Main";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Router>
        <Route path="/" exact component={Start} />
        <Route path="/main" component={Main} />
        <Route path="/card" component={Card} />
        <Route path="/help" component={Help} />
        <Route path="/change" component={Change} />
        <Route path="/info" component={Info} />
      </Router>
    </Container>
  );
}

export default App;
