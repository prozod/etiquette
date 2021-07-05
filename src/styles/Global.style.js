import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *, html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

  body {
    background-color: ${(props) => (props.whiteColor ? "white" : "#191919")};
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "Work Sans", sans-serif;

    
  }
`;
