import { http } from "msw";

const BASE_PATH = "http://localhost:3000"; // Define BASE_PATH
//import { HttpResponse } from "msw";
import { users } from "../data/userData";

// GET 요청 핸들러
//export const getUserHandler = http.get("/users", () => { });

// POST 요청 핸들러
//export const addUserHandler = http.post("/users", async ({ request }) => { });

// 모든 유저 관련 핸들러들 추가하기
//export const userHandlers = [getUserHandler, addUserHandler];

export const getUserHandler = http.get(
  `${BASE_PATH}/api/users`,
  ({ params }) => {
    const { status } = params;
    console.log("status", status);

    return Response.json(
      {
        code: 1,
        msg: "요청에 성공했습니다.",
        data: users,
      },
      { status: 200 }
    );
  }
);

//모킹 핸들러 사용 예시
// export const getMovieHandler = http.get(
//   `${BASE_PATH}/api/movies/status/:status`,
//   ({ params }) => {
//     const { status } = params;
//     console.log("status", status);

//     //상태코드 사용 예시
//     return HttpResponse.json(
//       {
//         code: 1,
//         msg: "요청에 성공했습니다.",
//         data: movies,
//       },
//       { status: 200 }
//     );
//   }
// );
export const userHandlers = [getUserHandler];
