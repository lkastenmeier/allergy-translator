import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Help from "./pages/Help";
import Change from "./pages/Change";
import Info from "./pages/Info";

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
        <Route path="/" exact component={Home} />
        <Route path="/card" exact component={Card} />
        <Route path="/help" exact component={Help} />
        <Route path="/change" exact component={Change} />
        <Route path="/info" exact component={Info} />
      </Router>
    </Container>
  );
}

export default App;
