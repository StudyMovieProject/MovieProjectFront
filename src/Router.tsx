import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Member from './pages/Member/Member';
import MemberConfirm from './pages/Member/MemberConfirm';
import Moive from './pages/Movie/Moive';
import BoxOffice from './pages/Movie/components/BoxOffice';
import MovieLatest from './pages/Movie/components/MovieLatest';
import MovieComming from './pages/Movie/components/MovieComming'; // 스펠링 수정 부탁드립니다
//import MembershipIntro from './pages/Member/MembershipIntro';
import App from './App';
import MovieDetail from './pages/Movie/components/MovieDetail/MovieDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/member', element: <Member /> },
      { path: '/member/confirm', element: <MemberConfirm /> },
      {
        path: 'movie',
        element: <Moive />, // 스펠링 수정 부탁드립니다 
        children: [
          {
            path: 'box-office',
            element: <BoxOffice />,
          },
          {
            path: 'latest',
            element: <MovieLatest />,
          },
          {
            path: 'comming',
            element: <MovieComming />,
          },
          {
            path: 'info',
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]);
