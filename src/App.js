import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

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
        {/* <Route path="/home" exact component={Home} /> */}
      </Router>
    </Container>
  );
}

export default App;
