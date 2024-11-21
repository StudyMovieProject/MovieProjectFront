import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Member from "./pages/Member/Member";
import MemberConfirm from "./pages/Member/MemberConfirm";
import Moive from "./pages/Movie/Moive";
import { App } from "./App";
import BoxOffice from "./pages/Movie/components/BoxOffice";
import MovieDetail from "./pages/Movie/components/MovieDetail/MovieDetail";
import MovieLatest from "./pages/Movie/components/MovieLatest";
import MovieComming from "./pages/Movie/components/MovieComming";
import MembershipIntro from "./pages/Member/MembershipIntro";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <App />,
        children: [
          {
            path: "/Member",
            element: <Member />,
            children: [
              {
                path: "Confirm",
                element: <MemberConfirm />,
              },
            ],
          },
        ],
      },
      {
        path: "movie",
        element: <Moive />,
        children: [
          {
            path: "box-office",
            element: <BoxOffice />,
          },
          {
            path: "Info",
            element: <MovieDetail />,
          },
          {
            path: "latest",
            element: <MovieLatest />,
          },
          {
            path: "comming",
            element: <MovieComming />,
          },
        ],
      },
          { path: "/", element: <Home /> },
          { path: "/member", element: <Member /> },
          { path: "/member/confirm", element: <MemberConfirm /> },
          { path: "/member/membershipIntro", element: <MembershipIntro /> },
        ],
      }
    ],
  },
]);
