import { theme } from '../Theme';
import { ThemeProvider } from '@mui/material/styles';
import { Global as EmotionGlobal } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <EmotionGlobal styles={emotionNormalize} />
    </ThemeProvider>
  );
}

// export default App;
