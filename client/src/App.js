//Dependencies
import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

//Functions & Components
import Help from "./components/pages/Help";
import Start from "./components/pages/Start";
import Main from "./components/pages/Main";
import MyCards from "./components/pages/MyCards";
import defaultTheme from "./themes/default";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  font-size: 1rem;
  margin: 1px;
  background-image: linear-gradient(#e3ebee, #bfccdd);
  height: 100vh;
  overflow-y: scroll;
`;

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyles />
        <Router>
          <Route path="/" exact component={Start} />
          <Route path="/main" component={Main} />
          <Route path="/help" component={Help} />
          <Route path="/mycards" component={MyCards} />
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
