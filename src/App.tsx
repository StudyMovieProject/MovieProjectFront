import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import { Outlet } from 'react-router-dom';

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
            font-size: 16px;
          }
        `}
      />
      <Outlet />
    </>
  );
}

export default App;