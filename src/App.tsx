import { Global, ThemeProvider } from '@emotion/react';
import { theme, globalStyles } from '../Theme';
import { Outlet } from 'react-router-dom';
import HeaderBar from './components/Header';
import ResponsiveAppBar from './components/NavBar';
import './styles.css';

export function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <HeaderBar />
        <ResponsiveAppBar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
