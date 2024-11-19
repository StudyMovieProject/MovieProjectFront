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
      { path: "/", element: <Home /> },
      { path: "/member", element: <Member /> },
      { path: "/member/confirm", element: <MemberConfirm /> },

      // children: [
      //   {
      //     path: "",
      //     element: <Home />,
      //     children: [
      //       {
      //         path: "member",
      //         element: <Member />,
      //         children: [
      //           {
      //             path: "confirm",
      //             element: <MemberConfirm />,
      //           },
      //         ],
      //       },
      //     ],
      //   },
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
    ],
  },
]);