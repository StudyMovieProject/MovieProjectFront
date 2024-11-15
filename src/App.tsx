import { css, Global } from "@emotion/react";
import Home from "./pages/Home";

const globalStyles = css`
  /* CSS Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    font-family: Arial, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Remove default list styling */
  ul,
  ol {
    list-style: none;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Home />
    </>
  );
}

export default App;
