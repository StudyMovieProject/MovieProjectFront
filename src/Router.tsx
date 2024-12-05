import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Member/Join';
import Confirm from './pages/Member/Confirm';
import Login from './pages/Member/Login';
import Complete from './pages/Member/Complete';
import Mypage from './pages/Member/Mypage';
import Info from "./pages/Member/Info";
import Moive from './pages/Movie/Moive';
import BoxOffice from './pages/Movie/components/BoxOffice';
import MovieLatest from './pages/Movie/components/MovieLatest';
import MovieComming from './pages/Movie/components/MovieComming'; // 스펠링 수정 부탁드립니다
import App from './App';
import MovieDetail from './pages/Movie/components/MovieDetail/MovieDetail';
import MovieCategories from './pages/Movie/components/MovieCategories';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/member', element: <Join /> },
      { path: '/member/confirm', element: <Confirm /> },
      { path: '/member/login', element: <Login /> },
      { path: '/member/complete', element: <Complete /> },
      { path: '/member/mypage', element: <Mypage /> },
      { path: '/member/info', element: <Info /> },
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
          {
            path: 'categories',
            element: <MovieCategories />,
          },
        ],
      },
    ],
  },
]);
