import { http } from "msw";
import { HttpResponse } from "msw";
import { movies } from "../data/movieData";

const BASE_PATH = "http://localhost:8080";

// GET 요청 핸들러
//영화 리스트 get 요청
export const getMovieListHandler = http.get(
  `${BASE_PATH}/api/movies/status/:status`,
  ({ params }) => {
    const { status } = params;

    if (!status) {
      return HttpResponse.json(
        {
          code: -1,
          msg: "요청에 실패했습니다.",
          data: movies,
        },
        { status: 404 }
      );
    }

    if (status === "POPULAR") {
      return HttpResponse.json(
        {
          code: 1,
          msg: "POPULAR 요청에 성공했습니다.",
          data: movies,
        },
        { status: 200 }
      );
    }
    if (status === "LATEST") {
      return HttpResponse.json(
        {
          code: 1,
          msg: "LATEST 요청에 성공했습니다.",
          data: movies,
        },
        { status: 200 }
      );
    }
    if (status === "UPCOMING") {
      return HttpResponse.json(
        {
          code: 1,
          msg: "UPCOMING 요청에 성공했습니다.",
          data: movies,
        },
        { status: 200 }
      );
    }
  }
);

//영화 상세정보 get 요청
export const getMovieDetailHandler = http.get(
  `${BASE_PATH}/api/movies/:movieId`,
  ({ params }) => {
    const { movieId } = params;

    if (!movieId) {
      return HttpResponse.json(
        {
          code: -1,
          msg: "요청에 실패했습니다.",
        },
        { status: 200 }
      );
    }

    const targetMovie = movies.find((movie) => movie.id === Number(movieId));

    return HttpResponse.json(
      {
        code: 1,
        msg: "요청에 성공했습니다.",
        data: targetMovie,
      },
      { status: 200 }
    );
  }
);

// POST 요청 핸들러
//export const addMovieHandler = http.post("/movies", async ({ request }) => {});

// 모든 영화 관련 핸들러들

export const movieHandlers = [
  getMovieListHandler,
  getMovieDetailHandler,
  addMovieHandler,
];

//export const movieHandlers = [getMovieHandler, addMovieHandler];

