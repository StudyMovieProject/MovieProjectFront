import { http } from "msw";
import { HttpResponse } from "msw";
import { movies } from "../data/movieData";

const BASE_PATH = "http://localhost:8080";

// GET 요청 핸들러
export const getMovieHandler = http.get(
  `${BASE_PATH}/api/movies/status/:status`,
  ({ params }) => {
    const { status } = params;
    console.log("status", status);

    if (status === "LATEST") {
      return HttpResponse.json({ movies }, { status: 200 });
    }
  }
);

// POST 요청 핸들러
export const addMovieHandler = http.post("/movies", async ({ request }) => {});

// 모든 영화 관련 핸들러들
export const movieHandlers = [getMovieHandler, addMovieHandler];
