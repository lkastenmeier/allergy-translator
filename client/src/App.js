import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Help from "./pages/Help";
import Info from "./pages/Info";
import Start from "./pages/Start";
import Main from "./pages/Main";
import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  font-size: 16px;
  margin: 1px;
  background-image: linear-gradient(#e3ebee, #bfccdd);
  height: 100vh;
  overflow-y: scroll;
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyles />
        <Router>
          <Route path="/" exact component={Start} />
          <Route path="/main" component={Main} />
          <Route path="/help" component={Help} />
          <Route path="/info" component={Info} />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;