import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Member from "./pages/Member/Member";
import MemberConfirm from "./pages/Member/MemberConfirm";
import Moive from "./pages/Movie/Moive";
import { App } from "./App";
import BoxOffice from "./pages/Movie/components/BoxOffice/BoxOffice";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
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
        ],
      },
    ],
  },
]);
