import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      :root {
        --nav-background-color: #efefef;
        --gray-text-color: #888889;
      }

      body {
      }
    `}
  />
);

export default GlobalStyles;
