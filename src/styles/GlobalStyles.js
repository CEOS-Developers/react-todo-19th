import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  
  body {
  background-color: #252423;
  }

  h1 {
  font-size: 1.125rem;
  color: #e9ecef;
  font-weight: 500;
  margin: 0;
  }

`;
