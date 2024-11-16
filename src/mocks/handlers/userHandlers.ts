import { http } from "msw";
import { HttpResponse } from "msw";

// GET 요청 핸들러
export const getUserHandler = http.get("/users", () => {});

// POST 요청 핸들러
export const addUserHandler = http.post("/users", async ({ request }) => {});

// 모든 유저 관련 핸들러들 추가하기
export const userHandlers = [getUserHandler, addUserHandler];
