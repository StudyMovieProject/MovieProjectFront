import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Member from "./pages/Member/Member";
import MemberConfirm from "./pages/Member/MemberConfirm";
// import BoxOffice from "./pages/Movie/BoxOffice";
// import Moive from "./pages/Movie/Moive";
import App from "./App";

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
            element: <Member />, // sns로 가입할지 이메일로 가입할지
            children: [
              {
                path: "Confirm",
                element: <MemberConfirm />, // 개인정보 기입
              },
            ],
          },
        ],
      },
    ],
  },
]);

// },
// {
//   path: "/Member",
//   element: <Member />,
//   children: [
//     {
//       path: "/Confirm",
//       element: <MemberConfirm />,
//     },
//   ],
// },

// {
//   path: "movie",
//   element: <Moive />,
//   children: [
//     {
//       path: "box-office",
//       element: <BoxOffice />,
//     },
//   ],
// },
