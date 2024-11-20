import { Global, ThemeProvider } from "@emotion/react";
import { Outlet } from 'react-router-dom';
import { theme, globalStyles } from '../Theme';
import Header from './components/Header';
import NavBar from './components/NavBar';

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Header />
        <NavBar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
