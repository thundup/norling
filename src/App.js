import { Header } from "./Conponents";
import { Sections } from "./Conponents";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto Serif;
  }
`;

const StyledApp = styled.div``;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <Sections />
    </StyledApp>
  );
}

export default App;
