import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  font-size: 16px;
  margin: 1px;
  background-image: linear-gradient(#e3ebee, #bfccdd);
  font-family: 'Roboto', sans-serif;
  height:100vh;
}

`;
