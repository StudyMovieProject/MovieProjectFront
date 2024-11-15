import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Member from './pages/Member/Member';
import MemberConfirm from './pages/Member/MemberConfirm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/Member',
        element: <Member />,
        children: [
          {
            path: 'Confirm',
            element: <MemberConfirm />,
          },
        ],
      },
    ],
  },
]);
