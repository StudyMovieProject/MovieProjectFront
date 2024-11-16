import { userHandlers } from "./handlers/userHandlers";
import { movieHandlers } from "./handlers/movieHandlers";

export const handlers = [...userHandlers, ...movieHandlers];
