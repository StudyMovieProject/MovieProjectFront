import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Member from './Header/Member';

function RootRoute() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Member" element={<Member />} />
    </Routes>
  );
}

export default RootRoute;
