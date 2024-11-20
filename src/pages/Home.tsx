import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>
  );
}
