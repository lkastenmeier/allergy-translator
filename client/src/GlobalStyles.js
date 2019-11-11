import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}
body, html {
  margin: 0px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  position: relative;
  overflow-x: hidden;
  ::-webkit-scrollbar {display:none;}
  border: none;

}


`;
