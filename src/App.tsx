import { css, Global } from "@emotion/react";
import Home from "./pages/Home";
import emotionNormalize from "emotion-normalize";

export function App() {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          html,
    body {
            padding: 0;
            margin: 0;
            background: white;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
          }
        `}
      />
      <Home />
    </>
  );
}

export default App;
