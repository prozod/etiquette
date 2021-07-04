import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
   box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
  body {
    background-color: ${(props) => (props.whiteColor ? "white" : "#191919")};
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;
